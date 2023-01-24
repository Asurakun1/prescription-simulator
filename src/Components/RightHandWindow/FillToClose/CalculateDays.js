import { translateSig } from "./CheckSigs";

const convertIntoExtractableData = (fullSig) => {
    const translated = translateSig(fullSig);

    return translated;
}

const tabletExtract = (sig) => {
    const translated = (translateSig(sig));

    if(translated.includes('TABLET')){
        const number = translated.split('TABLET')[0].split(' ').filter(element => parseInt(element))
        return parseInt(number);
    }
}

const hoursExtract = (sig) => {
    const translated = (translateSig(sig));

    if(translated.includes('HOURS')){
        const hours = translated.split('HOURS')[0].split(' ');

        return hours;
    }
}


export {tabletExtract, hoursExtract, convertIntoExtractableData}