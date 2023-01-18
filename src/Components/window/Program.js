import LeftHandWindow from "../LeftHandWindow/LeftHandWindow";
import RightHandWindow from "../RightHandWindow/RightHandWindow";
import { useState, useEffect } from "react";

const Program = (props) => {
    const patients = props.patients;
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