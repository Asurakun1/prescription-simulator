import './Window.css'
import { useState, useEffect } from 'react';
import Wrapper from './Wrapper';
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
                    <Wrapper patients={patients}/>
                    :
                    <h1 className='loading'>Loading... F1 window</h1>
            }
        </div>
    )
}

export default Window;