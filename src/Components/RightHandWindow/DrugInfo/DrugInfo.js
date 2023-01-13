import './DrugInfo.css'

const DrugInfo = () => {
    return (
        <div className='info drug-info'>
            <h4 className='drug-name'>Drug Name:
                <input value={"AMOXICILLIN"}></input>
            </h4>
        </div>
    );
}

export default DrugInfo;