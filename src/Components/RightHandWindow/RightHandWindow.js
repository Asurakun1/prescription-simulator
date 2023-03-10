import DoctorInfoIns from "./DoctorInfoIns/DoctorInfoIns";
import DrugInfo from "./DrugInfo/DrugInfo";
import InstructionsQuantity from "./InstructionsQuantity/InstructionsQuantity";
import { useState } from "react";
import FillToClose from "./FillToClose/FillToClose";

const RightHandWindow = (props) => {

    const [drugName, setDrugName] = useState();

    const [date, setDate] = useState('');
    const [sigs, setSigs] = useState("");
    const [preSigs, setPreSigs] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [quantityDisp, setQuantityDisp] = useState(0);
    const [days, setDays] = useState();
    const [refills, setRefills] = useState(0);

    const [phoneNumber, setPhoneNumber] = useState('')
    const [NPI, setNPI] = useState('')
    const [docFirstName, setDocFirstName] = useState('');
    const [docLastName, setDocLastName] = useState('');

    return (
        <div className='split right'>
            <DrugInfo
                drugname={props.data.Drug_Name}
                drugform={props.data.Drug_Form}
                DrugNameInput={drugName}
                setDrugNameInput={setDrugName}
            />
            <InstructionsQuantity
                quantity={props.data.Quantity}
                sig={props.data.Sig}
                date={date}
                setDate={setDate}
                sigs={sigs}
                setSigs={setSigs}
                preSigs={preSigs}
                setPreSigs={setPreSigs}
                quantityDisp={quantityDisp}
                setQuantityDisp={setQuantityDisp}
                QuantityInput={quantity}
                setQuantityInput={setQuantity}
                days={days}
                setDays={setDays}
                refills={refills}
                setRefills={setRefills}

            />
            <DoctorInfoIns
                prescriber={props.prescriber}
                insurance={props.insurance}
                controlled={props.data.Controlled}
                phoneNumber={phoneNumber}
                setPhoneNumber={setPhoneNumber}
                NPI={NPI}
                setNPI={setNPI}
                docFirstName={docFirstName}
                setDocFirstName={setDocFirstName}
                docLastName={docLastName}
                setDocLastName={setDocLastName}

            />
            <FillToClose 
                patientDoctor={props.patientDoctor}
                drugName={drugName} 
                data={props.data}
                date={props.date}
                dateInput={date}
                quantity={quantity}
                quantityDisp={quantityDisp}
                refills={refills}
                phoneNumber={phoneNumber}
                NPI={NPI}
                docFirstName={docFirstName}
                docLastName={docLastName}
                userSig={sigs}
                sig={props.data.Sig}
                days={days}
                setCleared={props.setCleared}
                setPatients={props.setPatients}

                />
        </div>
    );
}

export default RightHandWindow