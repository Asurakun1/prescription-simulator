import './InstructionsQuantity.css';
import { useEffect, useState } from 'react';
import { sigList } from './SigList';

const InstructionsQuantity = (props) => {
    const [sigs, setSigs] = useState("");
    const [preSigs, setPreSigs] = useState("");
    const [quantity, setQuantity] = useState();
    const [quantityDisp, setQuantityDisp] = useState();

    useEffect(() => {
        setQuantity(props.quantity);
        setQuantityDisp(props.quantity);
        setSigs("");
        setPreSigs("");
    }, [props.quantity, props.sig]);

    useEffect(() => {
        if (quantity < quantityDisp) {
            setQuantityDisp(quantity);
        }
    }, [quantity, quantityDisp])
    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    }

    const handleQuantityDispChange = (event) => {
        setQuantityDisp(event.target.value);
    }

    const handleBlur = (event) => {
        const text = event.target.value.toUpperCase();
        let sigArr = text.match(/[a-zA-Z0-9]+/gi)

        if (text) {
            sigArr = sigList(sigArr);
            setSigs(sigArr.join(" "));
        } else {
            setSigs(text)
        }
    }

    const handleFocus = () => {
        setSigs(preSigs);
    }

    const handleChange = (event) => {
        setSigs(event.target.value);
        setPreSigs(event.target.value);
    }
    return (
        <div className='info instruct-sigs'>
            <div className='quantity'>
                <h4>Quantity:
                    <input type={"number"} value={quantity} onChange={handleQuantityChange} min={0}></input>
                </h4>
                <h4>QuantityDisp:
                    <input type={"number"} min={0} max={quantity} value={quantityDisp} onChange={handleQuantityDispChange}></input>
                </h4>
            </div>
            <textarea
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
                value={sigs}
            >
            </textarea>
            <div className='days'>
                <h4>Days:<input type={"number"} min={1}></input></h4>
            </div>
        </div>
    );
}


export default InstructionsQuantity;