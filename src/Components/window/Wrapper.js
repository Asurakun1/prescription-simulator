import Program from "./Program";
import { useEffect, useState } from "react";
const Wrapper = (props) => {

    const [unClearedF1s, setUnclearedF1s] = useState(props.patients.filter(element => element.cleared === 'False' ? element : ''));


    useEffect(() => {
        setUnclearedF1s(props.patients.filter(element => element.cleared === 'False' ? element : ''));
    },[props.patients])

    return (
        <div>
            <div className='work-queue'>
                <div className='square'>
                    <p><strong>F1: {unClearedF1s.length}</strong></p>
                </div>
            </div>
            {
                /*
                This section will hold components of the prescription image on the left hand side
    
                The right hand side will hold components of prescriptions for lists of
                    medications,
                    drug amount or quantity,
                    instructions or sigs,
                 */
            }
            <Program patients={unClearedF1s} />
        </div>
    );
}

export default Wrapper;


