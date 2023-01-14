import DrugAndSig from './DrugAndSig/DrugAndSig';
import Patient from './Patient/Patient';
import Prescriber from './Prescriber/Prescriber';
import './Rx.css';

const Rx = () => {
    return (
        <div className='mock-rx'>
            <Patient />
            {
                /*Doctors information and address*/
            }
            <div className='block'>
            </div>
            <Prescriber />
            <div className='block'>
            </div>
            <DrugAndSig />
        </div>
    );
}


export default Rx;