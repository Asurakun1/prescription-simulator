import { translateSig } from "./CheckSigs";

const convertIntoExtractableData = (fullSig) => {
    const translated = translateSig(fullSig);

    let qty = 0;
    let duration = 0;
    switch (true) {
        case translated.includes('TABLET'):
                qty = translated.split('TABLET')[0].match(/[\d]+/g);
            break;
        case translated.includes('DAYS'):
                duration = translated.split('DAYS')[0].match(/[\d]+/g);
                duration = duration[duration.length];
    }


    const extractedData = {
        quantity: parseInt(qty),
        frequency: 0,
        duration: duration
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

export { convertIntoExtractableData }