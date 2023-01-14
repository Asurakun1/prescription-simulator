import './LeftHandWindow.css'
import Rx from './Rx/Rx'

const LeftHandWindow = () => {
    return (
        <div className='split left'>
            <Rx />
            <div className='editor'>
            </div>
        </div>
    )
}


export default LeftHandWindow