import './Cycle.css';

const Cycle = (props) => {
    const setID = props.setID;
    const currentID = props.currentID;

    const handleIncrementClick = () => {
        if (currentID < props.RxLength - 1) {
            setID(currentID + 1);
        }
    }

    const handleDecrementClick = () => {
        if(currentID > 0){
            setID(currentID - 1);
        }
    }
    return (
        <div className='cycle'>
            <h4>Use either the F1 key or buttons to cycle through Rx</h4>
            <div className='buttons'>
                <button onClick={handleDecrementClick}>Prev Rx</button>
                <button onClick={handleIncrementClick}>Next Rx</button>
            </div>
        </div>
    );
}

export default Cycle;