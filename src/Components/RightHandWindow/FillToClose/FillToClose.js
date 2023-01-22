import './FillToClose.css';
import { useState } from 'react';
import { buttonCheck, checkName, checkQuantity } from './CheckList';

const FillToClose = (props) => {

    const [check, setCheck] = useState('');
    const rxDrugName = `${props.data.Drug_Name} ${props.data.Drug_Form}`;
    const drugInfoComp = document.getElementById('drug-name-verify');
    const date = document.getElementById('date-verify');
    const quantity = document.getElementById('quantity-verify');
    const refills = document.getElementById('refills-verify');
    const phone = document.getElementById('phone-verify');
    const npi = document.getElementById('npi-verify');
    const firstName = document.getElementById('first-name-verify');
    const lastName = document.getElementById('last-name-verify');
    //const QuantityDisp = document.getElementById('quantitydisp-verify');

    const correct = {
        "DrugName": '',
        "Date": '',
        "Quantity": '',
        "QuantityDisp": '',
        "Days": '',
        "Refills": '',
        "Phone": '',
        "NPI": '',
        "First_Name": '',
        "Last_Name": ''
    }

    const verify = () => {

        checkName(props.drugName.trim(), rxDrugName, correct, 'DrugName', drugInfoComp);
        checkName(props.dateInput, props.date, correct, 'Date', date);
        checkQuantity(props.quantity, props.data.Quantity, correct, 'Quantity', quantity);
        checkQuantity(props.refills, props.data.Refills, correct, 'Refills', refills);
        checkName(props.phoneNumber, props.patientDoctor.Phone, correct, 'Phone', phone);
        checkName(props.NPI, props.patientDoctor.NPI, correct, 'NPI', npi);
        checkName(props.docFirstName, props.patientDoctor.FirstName, correct, 'First_Name', firstName);
        checkName(props.docLastName, props.patientDoctor.LastName, correct, 'Last_Name', lastName);
        (Object.values(correct).some(Element => !Element)) ?
            buttonCheck('red', setCheck) : buttonCheck('lime', setCheck);

    }

    const handleClick = () => {
        setCheck('yellow');
        verify();
    }
    return (
        <div className='fill-to-close'>
            <button onClick={handleClick} style={{ backgroundColor: check }}><span>F</span>ill{String.fromCharCode(0x02192)}Close</button>
        </div>
    );
}

export default FillToClose;