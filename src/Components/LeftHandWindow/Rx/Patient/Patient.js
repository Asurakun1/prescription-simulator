const Patient = () => {
    return (
        <div className='sect1'>
            <div className='name-date'>
                <p>Patient: John Doe</p>
                <p>Date: 01/20/2022</p>
            </div>
            <div className='address'>
                <p>Address: 123 Elm St, Anytown USA 12345</p>
                <p className='dob'>DOB: 01/01/1980</p>
            </div>
        </div>
    );
}
export default Patient;