import './DoctorInfoIns.css'
import { useEffect, useState } from 'react';

const DoctorInfoIns = (props) => {

    const [phoneNumber, setPhoneNumber] = useState('')
    const [NPI, setNPI] = useState('')
    const [doctor, setDoctor] = useState();
    const [docFirstName, setDocFirstName] = useState('');
    const [docLastName, setDocLastName] = useState('');

    useEffect(() => {
        if (doctor) {
            setDocFirstName(doctor.FirstName);
            setDocLastName(doctor.LastName);
            props.controlled === 'False' ? setNPI(doctor.NPI) : setNPI(doctor.DEA);
            setPhoneNumber(doctor.Phone);
        } else {
            setDocFirstName('');
            setDocLastName('');
            setNPI('');
            setPhoneNumber('');
        }
    }, [doctor, props.controlled])

    const handleChange = (event) => {
        const value = event.target.value;
        const formatValue = value.replace(/\D/g, '').replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
        setPhoneNumber(formatValue);
    }

    const handlePhoneBlur = (event) => {
        const phn = event.target.value;
        const regex = /^\d{3}-\d{3}-\d{4}$/;

        if (regex.test(phn) || (phn.length === 10 && !phn.includes('-'))) {
            setDoctor(props.prescriber.find(element => phn === element.Phone));
        } else {
            setDoctor();
        }
    }

    const handleNPIChange = (event) => {
        setNPI(event.target.value.toUpperCase())
    }

    const handleNPIblur = (event) => {
        if (NPI) {
            setDoctor(props.prescriber.find(element => event.target.value === element.NPI || event.target.value === element.DEA));
        } else {
            setDoctor();
        }
    }

    const handleFirstName = (event) => {
        setDocFirstName(event.target.value);
    }

    const handleLastName = (event) => {
        setDocLastName(event.target.value);
    }

    const handleBlurName = () => {
        const name = `${docFirstName.toUpperCase()} ${docLastName.toUpperCase()}`;
        setDoctor(props.prescriber.find(element => element.Prescriber.toUpperCase() === name));
    }

    return (
        <div className='info prescriber'>
            {
                /* Insurance information and billing */
            }
            <div className='doc-info'>
                <h4>Phone:
                    <input type="tel" onChange={handleChange} value={phoneNumber} maxLength={12} onBlur={handlePhoneBlur} />
                </h4>

                <h4>NPI:
                    <input type={"text"} onChange={handleNPIChange} value={NPI} maxLength={10} onBlur={handleNPIblur}></input>
                </h4>
            </div>


            <div className='doc-name'>
                <h4>
                    First name:
                    <input type={"text"} onChange={handleFirstName} value={docFirstName} onBlur={handleBlurName} />
                </h4>
                <h4>
                    Last name:
                    <input type={"text"} onChange={handleLastName} value={docLastName} onBlur={handleBlurName} />
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