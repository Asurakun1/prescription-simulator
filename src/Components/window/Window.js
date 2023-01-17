import './Window.css'
import RightHandWindow from '../RightHandWindow/RightHandWindow';
import LeftHandWindow from '../LeftHandWindow/LeftHandWindow';
import { useState, useEffect } from 'react';
const Window = () => {
    const [patients, setPatients] = useState();
    const [patientId, setPatientId] = useState(0);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/Data/Erx.JSON');
                if (response.ok) {
                    const jsonResponse = await response.json();
                    setPatients(jsonResponse)
                }

            } catch (er) {
                console.log(er)
            }
        }
        setTimeout(() => {
            fetchData();
        }, 500)
    }, [])

    useEffect(() => {
        const handleF1Key = (event) => {
            let currPatient = patientId;
            if (event.key === 'F1') {
                event.preventDefault();
                if (patients) {
                    setPatientId((currPatient + 1) % patients.length)
                }
            }
        }
        document.addEventListener('keydown', handleF1Key);
        return () => {
            document.removeEventListener('keydown', handleF1Key);
        }
    }, [patients, patientId])
    return (
        <div className='window'>
            {
                patients ?
                    <div className='work-queue'>
                        <div className='square'>
                            <p><strong>F1: {patients.length}</strong></p>
                        </div>
                    </div>
                    :
                    <h1 className='loading'>F1 Queue Loading...</h1>
            }
            {
                patients ?
                    <div className='inner-window'>
                        {
                            /*
                            This section will hold components of the prescription image on the left hand side
        
                            The right hand side will hold components of prescriptions for lists of
                                medications,
                                drug amount or quantity,
                                instructions or sigs,
                             */
                        }
                        <LeftHandWindow patient={patients[patientId]} setID={setPatientId} />
                        <RightHandWindow 
                            data={patients[patientId].Drug_info} 
                            insurance={patients[patientId].Patient_info.insurance}
                            prescriber={patients[patientId].Prescriber_info}
                            />
                    </div>
                    :
                    <h1 className='loading'>Loading... F1 window</h1>
            }
        </div>
    )
}

export default Window;