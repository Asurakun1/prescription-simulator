import './InstructionsQuantity.css';
import { useEffect } from 'react';
import { sigList } from './SigList';

const InstructionsQuantity = (props) => {
    const sigs = props.sigs, setSigs = props.setSigs;
    const preSigs = props.preSigs, setPreSigs = props.setPreSigs;
    const quantity = props.QuantityInput, setQuantity = props.setQuantityInput;
    const quantityDisp = props.quantityDisp, setQuantityDisp = props.setQuantityDisp;
    const date = props.date, setDate = props.setDate;
    const days = props.days, setDays = props.setDays;
    const refills = props.refills, setRefills = props.setRefills;

    useEffect(() => {
        setQuantity(props.quantity);
        setQuantityDisp(props.quantity);
        setSigs(``);
        setPreSigs(``);
    }, [props.quantity, props.sig, setSigs, setPreSigs, setQuantity, setQuantityDisp]);

    useEffect(() => {
        if (quantity < quantityDisp) {
            setQuantityDisp(quantity);
        }
    }, [quantity, quantityDisp, setQuantityDisp])
    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    }

    const handleQuantityDispChange = (event) => {
        setQuantityDisp(event.target.value);
    }

    const handleBlur = (event) => {
        const text = event.target.value.toUpperCase();
        let sigArr = text.trim().split(' ');

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

    const handleDateChange = (event) => {
        const regex = /[a-zA-Z]/g
        if (!regex.test(event.target.value)) {
            setDate(event.target.value);
        }
    }

    const handleDayChange = (event) => {
        setDays(event.target.value);
    }

    const handleRefillChange = (event) => {
        setRefills(event.target.value);
    }
    return (
        <div className='info instruct-sigs'>
            <div className='days date'>
                <h4>Date: <input id='date-verify' type={"text"} maxLength={10} onChange={handleDateChange} value={date} /></h4>
            </div>
            <div className='quantity'>
                <h4>Quantity:
                    <input type={"number"} id='quantity-verify' value={quantity} onChange={handleQuantityChange} min={0}></input>
                </h4>
                <h4>QuantityDisp:
                    <input type={"number"} id='quantitydisp-verify' min={0} max={quantity} value={quantityDisp} onChange={handleQuantityDispChange}></input>
                </h4>
            </div>
            <textarea
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
                value={sigs}
                id={'sigs-verify'}
            >
            </textarea>
            <div className='days'>
                <h4>Days:<input type={"number"} id='days-verify' min={1} onChange={handleDayChange} value={days}></input></h4>
                <h4>Refills: <input className='refills' id='refills-verify' type={"number"} min={0} onChange={handleRefillChange} value={refills} /></h4>
            </div>
        </div>
    );
}


export default InstructionsQuantity;