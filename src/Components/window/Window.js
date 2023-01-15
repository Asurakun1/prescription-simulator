import './Window.css'
import RightHandWindow from '../RightHandWindow/RightHandWindow';
import LeftHandWindow from '../LeftHandWindow/LeftHandWindow';
import { useState, useEffect } from 'react';
const Window = () => {
    const [patients, setPatients] = useState();
    const patientId = 0;
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/Data/Erx.JSON');
                if (response.ok) {
                    const jsonResponse =  await response.json();
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

    return (
        <div className='window'>
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

                    <LeftHandWindow patient={patients[patientId]}/>
                    <RightHandWindow />
                </div>
                :
                <h1>Loading...</h1>
            }
        </div>
    )
}

export default Window;