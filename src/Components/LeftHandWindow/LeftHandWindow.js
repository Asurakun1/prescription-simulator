import './LeftHandWindow.css'
import Rx from './Rx/Rx'

const LeftHandWindow = (props) => {
    return (
        <div className='split left'>
            <Rx patient={props.patient}/>
            <div className='editor'>
            </div>
        </div>
    )
}


export default LeftHandWindow