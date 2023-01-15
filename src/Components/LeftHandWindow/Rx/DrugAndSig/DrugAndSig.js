import './DrugAndSig.css';

const DrugAndSig = (props) => {
    return(
        <div className="sect3">
            <h3>{props.druginfo.Drug_Name} {props.druginfo.Drug_Form}</h3>
            <p>{props.druginfo.Sig}</p>
            <p>{props.druginfo.Quantity} {props.druginfo.Drug_Form}</p>
            <p>Refills: {props.druginfo.Refills}</p>
            <p>{props.druginfo.Substitution}</p>
        </div>
    );
}

export default DrugAndSig;