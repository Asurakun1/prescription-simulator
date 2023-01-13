import './InstructionsQuantity.css';
import { useState } from 'react';

const InstructionsQuantity = () => {
    const [sigs, setSigs] = useState("TAKE 1 TABLET BY MOUTH EVERY DAY");

    const handleChange = (event) => {
        setSigs(event.target.value);
    }
    return (
        <div className='info instruct-sigs'>
            <div className='quantity'>
                <h4>Quantity:
                    <input type={"number"} min={0}></input>
                </h4>
                <h4>QuantityDisp:
                    <input type={"number"} min={0}></input>
                </h4>
            </div>
            <textarea onChange={handleChange} value={sigs}></textarea>
            <div className='days'>
                <h4>Days:<input type={"number"} min={1}></input></h4>
            </div>
        </div>
    );
}


export default InstructionsQuantity;