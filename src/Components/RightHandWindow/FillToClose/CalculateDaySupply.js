

const calculateIndividualDataSets = (arrayObj, qty) => {
    let arrayOfDatasets = Array.isArray(arrayObj) ? [...arrayObj] : arrayObj;
    let quantity = qty;
    let daysupp = 0;

    Array.isArray(arrayOfDatasets) ?
        arrayOfDatasets.forEach(element => {
            daysupp += daySupply(element, quantity);
            quantity = remainingQuantity(element, quantity);
        }) :
        daysupp = daySupply(arrayOfDatasets, quantity);

    return daysupp;
}

const remainingQuantity = (objData, qty) => {

    let result;
    const hours = Object.hasOwn(objData, 'hours') ? 24 / objData.hours : '';
    const weeksToDays = Object.hasOwn(objData, 'weeks') ? objData.weeks * 7 : '';
    switch (true) {

        case Object.hasOwn(objData, 'hours') && Object.hasOwn(objData, 'weeks'):
            result = qty - (objData.quantity * hours * weeksToDays);
            break;

        case Object.hasOwn(objData, 'days') && Object.hasOwn(objData, 'hours'):
            result = qty - (objData.quantity * hours * objData.days);
            break;

        case Object.hasOwn(objData, 'weeks'):
            result = qty - (objData.quantity * weeksToDays);
            break;

        case Object.hasOwn(objData, 'hours'):
            result = qty - (objData.quantity * hours);
            break;

        case Object.hasOwn(objData, 'days'):
            result = qty - (objData.quantity * objData.days);
            break;
    }

    return result;
}

const daySupply = (objData, qty) => {

    let result = qty / objData.quantity;
    const hours = Object.hasOwn(objData, 'hours') ? 24 / objData.hours : '';
    const weeksToDays = Object.hasOwn(objData, 'weeks') ? objData.weeks * 7 : '';
    switch (true) {


        case Object.hasOwn(objData, 'hours') && Object.hasOwn(objData, 'weeks'):
            result = objData.quantity * hours * weeksToDays;
            break;

        case Object.hasOwn(objData, 'days') && Object.hasOwn(objData, 'hours'):
            result = objData.quantity * hours * objData.days;
            break;

        case Object.hasOwn(objData, 'weeks'):
            result = weeksToDays;
            break;

        case Object.hasOwn(objData, 'hours'):
            result = objData.quantity * hours;
            break;

        case Object.hasOwn(objData, 'qod'):
            result = qty / 0.5;
            break;

        case Object.hasOwn(objData, 'days'):
            result = objData.quantity * objData.days;
            break;
    }

    return result;
};


export { daySupply, calculateIndividualDataSets, remainingQuantity };