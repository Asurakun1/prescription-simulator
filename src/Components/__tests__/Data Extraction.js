import { convertIntoExtractableData, sigReducer } from '../RightHandWindow/FillToClose/CalculateDays';

describe('Sig data extractor', () => {

    test('it will split the sig into separate data points', () => {
        const sig = `tk 1 tab po qd`;

        expect(convertIntoExtractableData(sigReducer(sig))).toStrictEqual({
            quantity: 1
        });

        const sig2 = `tk 1 t po q 4 h x 10 days`;

        expect(convertIntoExtractableData(sigReducer(sig2))).toStrictEqual({
            quantity: 1,
            hours: 4,
            days: 10
        });
    });

    test('it will grab the correct data', () => {
        const sig = `tk 2 t po q 12 h x 10 days`;

        expect(convertIntoExtractableData(sigReducer(sig))).toStrictEqual({
            quantity: 2,
            hours: 12,
            days: 10
        })

    });

    test('it will parse incomplete sigs and get data', () => {
        const sig = `1 t po qd for x 10 days`;
        expect(convertIntoExtractableData(sigReducer(sig))).toStrictEqual({
            quantity: 1,
            days: 10
        });
    });

    test('it will split a complex sig into manageable phrases', () => {
        const sig = `Tk 1 tab po qd x 2 wks, then increase to 2 tab po qd if tolerated`;

        expect(sigReducer(sig)).toStrictEqual([`TAKE 1 TABLET BY MOUTH EVERY DAY FOR 2 WEEKS`, `INCREASE TO 2 TABLET BY MOUTH EVERY DAY IF TOLERATED`]);
    });

    test('phrases that are split will be converted into an array of objects', () => {
        const sig = `Tk 1 tab po qd x 2 wks, then increase to 2 tab po qd if tolerated`;

        const splitPhrases = sigReducer(sig);
        const converted = splitPhrases.map(element => {
            return convertIntoExtractableData(element);
        })

        expect(converted).toStrictEqual([{
            quantity: 1,
            weeks: 2
        },
        {
            increase_quantity: 2
        }
        ]);
    });

    test('it will parse a complex sig and gather the required data', () => {
        const sig = `Tk 1 tab po qd x 4 wks, then taper to 1 tab po qod x 2 wks`;
    });

})