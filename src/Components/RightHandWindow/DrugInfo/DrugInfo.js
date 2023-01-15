import './DrugInfo.css'
import { useState } from 'react';


const DrugInfo = () => {
    const [drugName, setDrugName] = useState('AMOXICILLIN')

    const handleChange = (event) => {
        setDrugName(event.target.value.toUpperCase());
    }

    return (
        <div className='info drug-info'>
            <h4 className='drug-name'>Drug Name:
                {<input type="search" onChange={handleChange} value={drugName} list="drug-name"></input>}
            </h4>
        </div>
    );
}

export default DrugInfo;