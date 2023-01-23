import { CheckSig } from "./CheckSigs";
const buttonCheck = (color, setCheck) => {
    setTimeout(() => {
        setCheck(color);
    }, 1000);
}

const incorrectInput = (elementID) => {
    setTimeout(() => {
        elementID.style.backgroundColor = "red";
        elementID.style.color = "white";
    }, 1000);
}
const correctInput = (elementID) => {
    setTimeout(() => {
        elementID.style.backgroundColor = "lime";
        elementID.style.color = "";
    }, 1000);
}


const checkSigs = (userSig, untranslatedSig, correct, property, elementID) => {
    if (!CheckSig(userSig, untranslatedSig)) {
        correct[property] = false;
        incorrectInput(elementID);
    } else {
        correct[property] = true;
        correctInput(elementID);
    }
}

const checkName = (NameInput, Name, correct, property, elementID) => {

    if (NameInput.trim().toUpperCase() !== Name.toUpperCase()) {
        correct[property] = false;
        incorrectInput(elementID);
    } else {
        correct[property] = true;
        correctInput(elementID);
    }
}
const checkQuantity = (QuantityInput, QuantityToCompare, correct, property, elementID) => {
    if (parseInt(QuantityInput) !== QuantityToCompare) {
        correct[property] = false;
        incorrectInput(elementID);
    } else {
        correct[property] = true;
        correctInput(elementID);
    }
}

export { buttonCheck, checkName, checkQuantity, checkSigs }