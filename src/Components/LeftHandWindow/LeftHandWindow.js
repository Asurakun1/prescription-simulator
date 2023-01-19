import Cycle from './Cycle/Cycle'
import './LeftHandWindow.css'
import Rx from './Rx/Rx'

const LeftHandWindow = (props) => {
    return (
        <div className='split left'>
            <Rx patient={props.patient} />
            <div className='editor'>
                <Cycle />
            </div>
        </div>
    )
}


export default LeftHandWindow