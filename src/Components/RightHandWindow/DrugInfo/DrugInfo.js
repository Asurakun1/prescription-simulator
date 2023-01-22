import './DrugInfo.css'
import { useEffect } from 'react';


const DrugInfo = (props) => {
    const drugName = props.DrugNameInput;
    const setDrugName = props.setDrugNameInput;

    useEffect(() => {
        setDrugName(`${props.drugname.toUpperCase()} ${props.drugform.toUpperCase()}`);
    }, [props.drugname, props.drugform, setDrugName])

    const handleChange = (event) => {
        setDrugName(event.target.value.toUpperCase());
    }

    return (
        <div className='info drug-info'>
            <h4 className='drug-name'>Drug Name:
                {<input id='drug-name-verify' type="search" onChange={handleChange} value={drugName} list="drug-name"></input>}
            </h4>
        </div>
    );
}

export default DrugInfo;