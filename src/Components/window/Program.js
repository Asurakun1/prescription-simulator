import LeftHandWindow from "../LeftHandWindow/LeftHandWindow";
import RightHandWindow from "../RightHandWindow/RightHandWindow";
import { useState, useEffect } from "react";
import {generateDEA, generateNPI, generatePhoneNumber} from './RandomGen';

const Program = (props) => {
    const [patients, setPatients] = useState(props.patients);
    useEffect(() => {
        setPatients(prevPatients => prevPatients.map(element => {
            const docPhone = generatePhoneNumber();
            element.Prescriber_info.NPI = generateNPI().toString();
            element.Prescriber_info.DEA = generateDEA(element.Prescriber_info.LastName).toString();
            element.Prescriber_info.Fax = docPhone.substring(0, docPhone.length - 1) + (Math.floor(Math.random() * 9) + 1);
            element.Prescriber_info.Phone = docPhone;
            element.Patient_info.Patient_Phone = generatePhoneNumber();

            while(element.Prescriber_info.Fax === element.Prescriber_info.Phone){
                const newPhone = generatePhoneNumber();
                element.Prescriber_info.Fax = newPhone.substring(0, docPhone.length - 1) + (Math.floor(Math.random() * 9) + 1);
                element.Prescriber_info.Phone = newPhone;
            }
            return element;
        }));
    },[])

    const [patientId, setPatientId] = useState(0);

    const prescriberList = patients.map(element => {
        return element.Prescriber_info;
    });

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
        <div className="inner-window">
            <LeftHandWindow patient={patients[patientId]} setID={setPatientId} currentID={patientId} RxLength={patients.length}/>
            <RightHandWindow
                date={patients[patientId].Date}
                data={patients[patientId].Drug_info}
                insurance={patients[patientId].Patient_info.insurance}
                prescriber={prescriberList}
                patientDoctor={patients[patientId].Prescriber_info}
            />
        </div>
    );
}

export default Program;