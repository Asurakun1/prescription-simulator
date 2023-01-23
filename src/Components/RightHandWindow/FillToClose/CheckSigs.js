import { sigList } from '../InstructionsQuantity/SigList';

const translateSig = (sig) => {
    let translated = sigList(sig.match(/[\w\d]+/g));

    translated = translated.map((sig) => {
        switch (sig) {
            case 'X':
                sig = 'FOR';
                break;
            case 'TAB':
                sig = 'TABLET';
                break;
            case 'WKS':
                sig = 'WEEKS'
                break;
            default:
                return sig;
        }

        return sig;
    });

    return translated.join(' ');
}

const checkUserSigInput = (userSig, sigToTest) => {
    const regex = /[\w\d]+/g;
    const user = userSig.match(regex);
    const sig = sigToTest.match(regex);

    const same =  user ? sig.every((element, index) => {
        return element === user[index];
    }) : false;
    return same;

}

const CheckSig = (userSig, untranslatedSig) => {

    const translated = translateSig(untranslatedSig.toUpperCase());
    return checkUserSigInput(userSig, translated);

}

export { translateSig, checkUserSigInput, CheckSig };