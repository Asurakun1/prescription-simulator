import './Window.css'
import RightHandWindow from '../RightHandWindow/RightHandWindow';
import LeftHandWindow from '../LeftHandWindow/LeftHandWindow';
const Window = () => {
    return (
        <div className='window'>
            <div className='inner-window'>
                {
                    /*
                    This section will hold components of the prescription image on the left hand side

                    The right hand side will hold components of prescriptions for lists of
                        medications,
                        drug amount or quantity,
                        instructions or sigs,
                     */
                }
                <LeftHandWindow />
                <RightHandWindow />
            </div>
        </div>
    )
}

export default Window;