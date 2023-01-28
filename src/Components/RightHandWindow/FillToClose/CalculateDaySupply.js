

const daySupply = (objData, qty) => {

    let result = objData.quantity * qty;
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
            result = objData.quantity * weeksToDays;
            break;

        case Object.hasOwn(objData, 'hours'):
            result = objData.quantity * hours;
            break;

        case Object.hasOwn(objData, 'days'):
            result = objData.quantity * objData.days;
            break;
    }

    return result;
};


export { daySupply };