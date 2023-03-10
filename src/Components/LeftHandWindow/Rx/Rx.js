import DrugAndSig from './DrugAndSig/DrugAndSig';
import Patient from './Patient/Patient';
import Prescriber from './Prescriber/Prescriber';
import './Rx.css';

const Rx = (props) => {
    return (
        <div className='mock-rx'>
            <div className='block'>
                <p>Patient: </p>
            </div>
            <Patient patient={props.patient.Patient_info} Date={props.patient.Date} />
            {
                /*Doctors information and address*/
            }
            <div className='block'>
                <p>Prescriber: </p>
            </div>
            <Prescriber prescriber={props.patient.Prescriber_info} />
            <div className='block directions'>
            </div>
            <DrugAndSig druginfo={props.patient.Drug_info} />
        </div>
    );
}


export default Rx;