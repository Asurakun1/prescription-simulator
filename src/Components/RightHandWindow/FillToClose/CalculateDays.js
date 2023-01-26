import { checkAndTranslate } from "./CheckSigs";


const parseTranslation = (translatedSig, regex) => {
    const parser = translatedSig;
    return parser.match(regex) ? parser.match(regex)[0].match(/\d+/) : 0;
}

const sigReducer = (multiSig) => {
    const translated = checkAndTranslate(multiSig);
    if(translated.includes('THEN')){
        return translated.split('THEN').map(element => {
            return element.trim();
        });
    }
    return translated;
}

const convertIntoExtractableData = (fullSig) => {
    const translated = fullSig;

    const tabletRegex = /TAKE [\d]+ TABLET/;
    const hourRegex = /EVERY [\d]+ HOURS/;
    const dayRegex = /FOR [\d]+ DAYS/;
    const weekRegex = /FOR [\d]+ WEEKS/;
    const increaseRegex = /INCREASE TO [\d]+ TABLET/;

    const qty = parseTranslation(translated, tabletRegex);
    const hours = parseTranslation(translated, hourRegex);
    const days = parseTranslation(translated, dayRegex);
    const weeks = parseTranslation(translated, weekRegex);
    const increase_quantity = parseTranslation(translated, increaseRegex);

    const extractedData = {
        quantity: parseInt(qty),
        hours: parseInt(hours),
        days: parseInt(days),
        weeks: parseInt(weeks),
        increase_quantity: parseInt(increase_quantity)
    }

    const filteredData = Object.entries(extractedData).filter(([key, value]) => {
        return value;
    });

    const objData = filteredData.reduce((acc, [key, value]) => {
        acc[key] = value;
        return acc;
    }, {});
    return objData;
}

export { convertIntoExtractableData, sigReducer }