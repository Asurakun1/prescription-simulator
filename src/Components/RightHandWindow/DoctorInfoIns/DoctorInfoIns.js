import './DoctorInfoIns.css'
import { useState } from 'react';

const DoctorInfoIns = () => {

    const [phoneNumber, setPhoneNumber] = useState('(123)456-7891')
    const [NPI, setNPI] = useState('1234567890')

    const handleChange = (event) => {
        if (!event.target.value.match(/[a-zA-Z]/g)) {
            setPhoneNumber(event.target.value)
        }
    }

    const handleNPIChange = (event) => {
        setNPI(event.target.value)
    }

    return (
        <div className='info prescriber'>
            {
                /* Insurance information and billing */
            }
            <div className='doc-info'>
                <h4>Phone:
                    <input type="tel" onChange={handleChange} value={phoneNumber} maxLength={13} />
                </h4>

                <h4>NPI:
                    <input type={"text"} onChange={handleNPIChange} value={NPI} maxLength={10}></input>
                </h4>
            </div>


            <div className='doc-name'>
                <h4>
                    First name:
                    <input type={"text"} defaultValue={"John"} />
                </h4>
                <h4>
                    Last name:
                    <input type={"text"} defaultValue={"Doe"} />
                </h4>
            </div>

            <div className='doc-third-party'>
                <h4>
                    Third party:
                    <select id='thirdparty'>
                        <option value={"MEDPB"}>MEDPB</option>
                        <option value={"IMMUNMPB"}>IMMUNMPB</option>
                        <option value={"GOODRX"}>GOODRX</option>
                        <option value={"KAISE"}>KAISE</option>
                        <option value={"CABS"}>CABS</option>
                    </select>
                </h4>
            </div>
        </div>
    );
}

export default DoctorInfoIns;