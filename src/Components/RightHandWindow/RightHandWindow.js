import DoctorInfoIns from "./DoctorInfoIns/DoctorInfoIns";
import DrugInfo from "./DrugInfo/DrugInfo";
import InstructionsQuantity from "./InstructionsQuantity/InstructionsQuantity";


const RightHandWindow = (props) => {
    return (
        <div className='split right'>
            <DrugInfo drugname={props.data.Drug_Name} drugform={props.data.Drug_Form}/>
            <InstructionsQuantity quantity={props.data.Quantity} sig={props.data.Sig}/>
            <DoctorInfoIns prescriber={props.prescriber} insurance={props.insurance} controlled={props.data.Controlled}/>
        </div>
    );
}

export default RightHandWindow