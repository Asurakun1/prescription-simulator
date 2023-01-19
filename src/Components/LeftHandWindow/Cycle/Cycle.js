import './Cycle.css';

const Cycle = () => {
    return (
        <div className='cycle'>
            <h4>Use either the F1 key or buttons to cycle through Rx</h4>
            <div className='buttons'>
                <button>Prev Rx</button>
                <button>Next Rx</button>
            </div>
        </div>
    );
}

export default Cycle;