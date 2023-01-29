import { checkAndTranslate } from "./CheckSigs";


const parseTranslation = (translatedSig, regex) => {
    const parser = translatedSig;
    return parser.match(regex) ? parser.match(regex)[0].match(/\d+/) : 0;
}

const parseContainmentPhrase = (translatedSig, regex) => {
    return translatedSig.match(regex);
}

const returnSingleOrMultiplePhrases = (sig) => {
    const reducedSig = sigReducer(sig);
    const converted = Array.isArray(reducedSig) ? reducedSig.map(element => {
        return convertIntoExtractableData(element);
    }) : convertIntoExtractableData(reducedSig);

    return converted;
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
    const halfTabletRegex = /TAKE HALF TABLET/;
    const hourRegex = /EVERY [\d]+ HOURS/;
    const daysRegex = /FOR [\d]+ DAYS/;
    const dayRegex = /FOR [\d]+ DAY/;
    const weeksRegex = /FOR [\d]+ WEEKS/;
    const weekRegex = /FOR [\d]+ WEEK/;
    const increaseRegex = /INCREASE TO [\d]+ TABLET/;
    const taperRegex = /TAPER TO [\d]+ TABLET/;
    const qodRegex = /EVERY OTHER DAY/;

    const qty = !translated.match(halfTabletRegex) ? parseTranslation(translated, tabletRegex) : 0.5;
    const hours = parseTranslation(translated, hourRegex);
    const days = parseTranslation(translated, dayRegex) ? parseTranslation(translated, dayRegex) : parseTranslation(translated, daysRegex); 
    const weeks = parseTranslation(translated, weekRegex) ? parseTranslation(translated, weekRegex) : parseTranslation(translated, weeksRegex);
    const increase_quantity = parseTranslation(translated, increaseRegex);
    const taper = parseTranslation(translated, taperRegex);
    const qod = parseContainmentPhrase(translated, qodRegex) ? true : false;

    
    const extractedData = {
        quantity: parseFloat(qty) ? parseFloat(qty) : parseFloat(increase_quantity),
        hours: parseInt(hours),
        days: parseInt(days),
        weeks: parseInt(weeks),
        taper: parseInt(taper),
        qod: qod
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

export { convertIntoExtractableData, sigReducer, returnSingleOrMultiplePhrases }