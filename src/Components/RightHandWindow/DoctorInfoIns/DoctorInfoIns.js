import './DoctorInfoIns.css'
import { useEffect, useState } from 'react';

const DoctorInfoIns = (props) => {

    const phoneNumber = props.phoneNumber, setPhoneNumber = props.setPhoneNumber;
    const NPI = props.NPI, setNPI = props.setNPI;
    const [doctor, setDoctor] = useState();
    const docFirstName = props.docFirstName, setDocFirstName = props.setDocFirstName;
    const docLastName = props.docLastName, setDocLastName = props.setDocLastName;

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
    }, [doctor, props.controlled, setDocFirstName, setDocLastName, setNPI, setPhoneNumber])

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

    const handleNPIblur = () => {
        NPI ? setDoctor(props.prescriber.find(element => NPI === element.NPI || NPI === element.DEA))
            : setDoctor();
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
                    <input id='phone-verify' type="tel" onChange={handleChange} value={phoneNumber} maxLength={12} onBlur={handlePhoneBlur} />
                </h4>

                <h4>NPI:
                    <input id='npi-verify' className='npi' type="text" onChange={handleNPIChange} value={NPI} maxLength={10} onBlur={handleNPIblur}></input>
                </h4>
            </div>


            <div className='doc-name'>
                <h4>
                    First name:
                    <input id='first-name-verify' type="text" onChange={handleFirstName} value={docFirstName} onBlur={handleBlurName} />
                </h4>
                <h4>
                    Last name:
                    <input id='last-name-verify' type="text" onChange={handleLastName} value={docLastName} onBlur={handleBlurName} />
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