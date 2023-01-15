const Prescriber = () => {
    return (
        <div className='sect2'>
            <div className="inner-sect2">
                <div>
                    <div className='name-date'>
                        <p>Prescriber: John Doe </p>
                    </div>
                    <div className='address'>
                        <p>123 Main St, Suite 200, Anytown USA 12345</p>
                    </div>
                </div>
                <div className="phone-fax">
                    <div>
                        <p>Fax: </p>
                        <p>555-555-5555</p>
                    </div>
                    <div>
                        <p>Phone: </p>
                        <p>555-555-5555</p>
                    </div>
                </div>
            </div>
            <div className='dea-npi'>
                <div className="dea-npi-info">
                    <p>NPI: 1234567890</p>
                    <p>DEA: AB1234567</p>
                </div>
            </div>
        </div>
    );
}


export default Prescriber