import './Window.css'
import Program from './Program';

import { useState, useEffect } from 'react';
const Window = () => {
    const [patients, setPatients] = useState();
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
                    <div>
                        {
                            /*
                            This section will hold components of the prescription image on the left hand side
        
                            The right hand side will hold components of prescriptions for lists of
                                medications,
                                drug amount or quantity,
                                instructions or sigs,
                             */
                        }
                        <Program patients={patients}/>
                    </div>
                    :
                    <h1 className='loading'>Loading... F1 window</h1>
            }
        </div>
    )
}

export default Window;