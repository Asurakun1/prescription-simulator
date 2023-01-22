const buttonCheck = (color, setCheck) => {
    setTimeout(() => {
        setCheck(color);
    }, 1000);
}

const checkName = (NameInput, Name, correct, property, elementID) => {

    if (NameInput.trim().toUpperCase() !== Name.toUpperCase()) {
        correct[property] = false;
        setTimeout(() => {
            elementID.style.backgroundColor = "red";
            elementID.style.color = "white";
        }, 1000);
    } else {
        correct[property] = true;
        setTimeout(() => {
            elementID.style.backgroundColor = "lime";
            elementID.style.color = "";
        }, 1000);
    }
}
const checkQuantity = (QuantityInput, QuantityToCompare, correct, property, elementID) => {
    if (parseInt(QuantityInput) !== QuantityToCompare) {
        correct[property] = false;
        setTimeout(() => {
            elementID.style.backgroundColor = "red";
            elementID.style.color = "white";
        }, 1000);
    } else {
        correct[property] = true;
        setTimeout(() => {
            elementID.style.backgroundColor = "lime";
            elementID.style.color = "";
        }, 1000);
    }
}

export { buttonCheck, checkName, checkQuantity}