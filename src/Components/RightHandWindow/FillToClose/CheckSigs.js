import { sigList } from '../InstructionsQuantity/SigList';

const translateSig = (sig) => {
    let translated = sigList(sig.toUpperCase().match(/[\w\d]+/g));

    translated = translated.map((sig) => {
        switch (sig) {
            case 'X':
                sig = 'FOR';
                break;
            case 'TAB':
                sig = 'TABLET';
                break;
            case 'WKS':
                sig = 'WEEKS';
                break;
            case 'WK':
                sig = 'WEEK';
                break;
            default:
                return sig;
        }

        return sig;
    });

    return translated.join(' ');
}

const checkAndTranslate = (sig) => {
    const instructions = checkIncomplete(translateSig(sig));
    return instructions;
}

const checkIncomplete = (sig) => {
    let instructions = sig;
    switch (true) {

        case instructions.includes('INCREASE'):
            return instructions;
        case !instructions.includes('TAKE'):
            instructions = `TAKE ${instructions}`;
            break;

        default:
            break;
    }
    return instructions;
}

const checkUserSigInput = (userSig, sigToTest) => {
    const regex = /[\w\d]+/g;
    const user = userSig.match(regex);
    const sig = sigToTest.match(regex);

    const same = user ? sig.every((element, index) => {
        return element === user[index];
    }) : false;
    return same;

}

const CheckSig = (userSig, untranslatedSig) => {

    const translated = translateSig(untranslatedSig.toUpperCase());
    return checkUserSigInput(userSig, translated);

}

export { translateSig, checkUserSigInput, CheckSig, checkAndTranslate };