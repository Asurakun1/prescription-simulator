const generateNPI = () => {
    const randomNumber = Math.floor(Math.random() * (999999999 - 100000000 + 1) + 100000000);
    return randomNumber;
}

const generateDEA = (LastName) => {
    let regristation = '';
    const randomNumber = Math.floor(Math.random() * (9999999 - 1000000 + 1) + 1000000);
    const randomRegristation = Math.floor(Math.random() * 4) + 1;
    switch (randomRegristation) {
        case 1:
            regristation = 'A';
            break;
        case 2:
            regristation = 'B';
            break;
        case 3:
            regristation = 'F';
            break;
        case 4:
            regristation = 'M';
            break;
        default:
            break;
    }
    return `${regristation}${LastName[0]}${randomNumber}`;
}

const generatePhoneNumber = () => {
    const first3digit = Math.floor(Math.random() * (999 - 100 + 1) + 100);
    const next3digit = Math.floor(Math.random() * (999 - 100 + 1) + 100);
    const randomLast4digit = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);

    return `${first3digit}-${next3digit}-${randomLast4digit}`;
}

export {generateDEA, generateNPI, generatePhoneNumber}