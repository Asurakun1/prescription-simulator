import './DrugInfo.css'
import { useEffect, useState } from 'react';


const DrugInfo = (props) => {
    const [drugName, setDrugName] = useState(``)

    useEffect(() =>{
        setDrugName(`${props.drugname.toUpperCase()} ${props.drugform.toUpperCase()}`);
    }, [props.drugname, props.drugform])

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