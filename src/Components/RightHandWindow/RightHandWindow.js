import DoctorInfoIns from "./DoctorInfoIns/DoctorInfoIns";
import DrugInfo from "./DrugInfo/DrugInfo";
import InstructionsQuantity from "./InstructionsQuantity/InstructionsQuantity";


const RightHandWindow = () => {
    return (
        <div className='split right'>
            <DrugInfo />
            <InstructionsQuantity />
            <DoctorInfoIns />
        </div>
    );
}

export default RightHandWindow