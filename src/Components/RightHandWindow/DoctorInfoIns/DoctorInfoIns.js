import './DoctorInfoIns.css'
import { useState } from 'react';

const DoctorInfoIns = (props) => {

    const [phoneNumber, setPhoneNumber] = useState('')
    const [NPI, setNPI] = useState('')

    const handleChange = (event) => {
        if(!event.target.value.match(/[a-zA-Z]/g)){
            setPhoneNumber(event.target.value);
        }
    }

    const handlePhoneBlur = (event) => {
        const phn = event.target.value;
        const regex = /^\d{3}-\d{3}-\d{4}$/;

        if(regex.test(phn) || (phn.length === 10 && !phn.includes('-'))){
            switch(true){
                case (phn === props.prescriber.Phone):
                    console.log('pass');
                    break;
                default:
                    return;
            }
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
                    <input type="tel" onChange={handleChange} value={phoneNumber} maxLength={12} onBlur={handlePhoneBlur}/>
                </h4>

                <h4>NPI:
                    <input type={"text"} onChange={handleNPIChange} value={NPI} maxLength={10}></input>
                </h4>
            </div>


            <div className='doc-name'>
                <h4>
                    First name:
                    <input type={"text"} defaultValue={""} />
                </h4>
                <h4>
                    Last name:
                    <input type={"text"} defaultValue={""} />
                </h4>
            </div>

            <div className='doc-third-party'>
                <h4>
                    Third party:
                    <select id='thirdparty'>
                        {
                            props.insurance.map((element, index) => {
                                return <option key={index} value={element}>{element}</option>;
                            })
                        }
                    </select>
                </h4>
            </div>
        </div>
    );
}

export default DoctorInfoIns;