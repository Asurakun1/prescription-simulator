import LeftHandWindow from "../LeftHandWindow/LeftHandWindow";
import RightHandWindow from "../RightHandWindow/RightHandWindow";
import { useState } from "react";

const Program = (props) => {
    const patients = props.patients;
    const [patientId, setPatientId] = useState(props.patientId);

    const prescriberList = patients.map(element => {
        return element.Prescriber_info;
    });
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