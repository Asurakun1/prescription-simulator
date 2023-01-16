import './InstructionsQuantity.css';
import { useEffect, useState } from 'react';

const InstructionsQuantity = (props) => {
    const [sigs, setSigs] = useState("");
    const [preSigs, setPreSigs] = useState("");
    const [quantity, setQuantity] = useState();

    useEffect(() => {
        setQuantity(props.quantity)
        setSigs("");
    }, [props.quantity, props.sig]);


    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    }

    const handleBlur = (event) => {
        const text = event.target.value.toUpperCase();
        let sigArr = text.match(/[a-zA-Z0-9]+/gi)

        if (text) {
            sigArr = sigArr.map((element) => {
                switch (element) {
                    case 'BID':
                        element = "TWICE DAILY";
                        break;
                    case 'TID':
                        element = "THREE TIMES DAILY";
                        break;
                    case 'QID':
                        element = 'FOUR TIMES DAILY';
                        break;
                    case 'TK':
                        element = 'TAKE';
                        break;
                    case 'T':
                        element = 'TABLET';
                        break;
                    case 'PO':
                        element = "BY MOUTH";
                        break;
                    case 'QD':
                        element = "EVERY DAY";
                        break;
                    case 'Q':
                        element = "EVERY";
                        break;
                    case 'PRN':
                        element = "AS NEEDED";
                        break;
                    case 'UTD':
                        element = "AS DIRECTED";
                        break;
                    case 'H':
                        element = "HOURS";
                        break;
                    case 'AA':
                        element = "TO THE AFFECTED AREA";
                        break;
                    case 'APP':
                        element = "APPLY";
                        break;
                    case 'AD':
                        element = "RIGHT EAR";
                        break;
                    case 'AS':
                        element = 'LEFT EAR';
                        break;
                    case 'AU':
                        element = 'BOTH EARS';
                        break;
                    default:
                        return element;
                }
                return element;
            });
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
                    <input type={"number"} min={0} max={quantity} defaultValue={quantity}></input>
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