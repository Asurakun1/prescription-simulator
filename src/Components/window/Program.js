import LeftHandWindow from "../LeftHandWindow/LeftHandWindow";
import RightHandWindow from "../RightHandWindow/RightHandWindow";
import { useState, useEffect } from "react";

const Program = (props) => {

    const generateNPI = () => {
        const randomNumber = Math.floor(Math.random() * (999999999 - 100000000 + 1) + 100000000);
        return randomNumber;
    }

    const generateDEA = (LastName) => {
        let regristation = '';
        const randomNumber = Math.floor(Math.random() * (9999999 - 1000000 + 1) + 1000000);
        const randomRegristation = Math.floor(Math.random() * 4) + 1;
        switch (randomRegristation) {
            case 1:
                regristation = 'A';
                break;
            case 2:
                regristation = 'B';
                break;
            case 3:
                regristation = 'F';
                break;
            case 4:
                regristation = 'M';
                break;
            default:
                break;
        }
        return `${regristation}${LastName[0]}${randomNumber}`;
    }

    const generatePhoneNumber = () => {
        const first3digit = Math.floor(Math.random() * (999 - 100 + 1) + 100);
        const next3digit = Math.floor(Math.random() * (999 - 100 + 1) + 100);
        const randomLast4digit = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);

        return `${first3digit}-${next3digit}-${randomLast4digit}`;
    }

    const patients = props.patients.map(element => {
        const docPhone = generatePhoneNumber();
        element.Prescriber_info.NPI = generateNPI().toString();
        element.Prescriber_info.DEA = generateDEA(element.Prescriber_info.LastName).toString();
        element.Prescriber_info.Fax = docPhone.substring(0, docPhone.length - 1) + (Math.floor(Math.random() * 9) + 1);
        element.Prescriber_info.Phone = docPhone;
        element.Patient_info.Patient_Phone = generatePhoneNumber();
        return element;
    });
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
            <LeftHandWindow patient={patients[patientId]} setID={setPatientId} />
            <RightHandWindow
                data={patients[patientId].Drug_info}
                insurance={patients[patientId].Patient_info.insurance}
                prescriber={prescriberList}
            />
        </div>
    );
}

export default Program;