import './Patient.css';

const Patient = () => {
    return (
        <div className='sect1'>
            <div className='layer1'>
                <div className='pt-info'>
                    <div className='name-date'>
                        <p>Patient: John Doe</p>
                    </div>
                    <div className='address'>
                        <p>123 Elm St, Anytown USA 12345</p>
                    </div>
                </div>
                <div className='pt-dob-date'>
                    <div>
                        <p><strong>Date: </strong></p>
                        <p><strong>01/20/2022</strong></p>
                    </div>
                    <div>
                        <p className='dob'>DOB: </p>
                        <p>01/01/1980</p>
                    </div>
                </div>
            </div>
            <div className="pt-ph">
                <p></p>
                <div className='pt-ph-n'>
                    <p>Phone: </p>
                    <p>555-555-5555</p>
                </div>
            </div>
        </div>
    );
}
export default Patient;