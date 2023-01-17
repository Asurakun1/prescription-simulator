import './Patient.css';

const Patient = (props) => {
    return (
        <div className='sect1'>
            <div className='layer1'>
                <div className='pt-info'>
                    <div className='name-date'>
                        <p>{props.patient.Patient}</p>
                    </div>
                    <div className='address'>
                        <p>{props.patient.Patient_Address}</p>
                    </div>
                </div>
                <div className='pt-dob-date'>
                    <div>
                        <p><strong>Date: </strong></p>
                        <p><strong>{props.Date}</strong></p>
                    </div>
                    <div>
                        <p className='dob'>DOB: </p>
                        <p>{props.patient.DOB}</p>
                    </div>
                </div>
            </div>
            <div className="pt-ph">
                <p></p>
                <div className='pt-ph-n'>
                    <p>Phone: </p>
                    <p>{props.patient.Patient_Phone}</p>
                </div>
            </div>
        </div>
    );
}
export default Patient;