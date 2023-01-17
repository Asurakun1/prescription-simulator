const Prescriber = (props) => {
    return (
        <div className='sect2'>
            <div className="inner-sect2">
                <div>
                    <div className='name-date'>
                        <p>{props.prescriber.Prescriber}</p>
                    </div>
                    <div className='address'>
                        <p>{props.prescriber.Prescriber_Address}</p>
                    </div>
                </div>
                <div className="phone-fax">
                    <div>
                        <p>Fax: </p>
                        <p>{props.prescriber.Fax}</p>
                    </div>
                    <div>
                        <p>Phone: </p>
                        <p>{props.prescriber.Phone}</p>
                    </div>
                </div>
            </div>
            <div className='dea-npi'>
                <div className="dea-npi-info">
                    <p>NPI: {props.prescriber.NPI}</p>
                    <p>DEA: {props.prescriber.DEA}</p>
                </div>
            </div>
        </div>
    );
}


export default Prescriber