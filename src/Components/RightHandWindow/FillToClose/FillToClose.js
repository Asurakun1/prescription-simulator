import './FillToClose.css';

const FillToClose = (props) => {
    return (
        <div className='fill-to-close'>
            <button><span>F</span>ill{String.fromCharCode(0x02192)}Close</button>
        </div>
    );
}

export default FillToClose;