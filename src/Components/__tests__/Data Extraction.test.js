import { returnSingleOrMultiplePhrases, sigReducer } from '../RightHandWindow/FillToClose/DataExtractor';

describe('Sig data extractor', () => {

    test('it will split the sig into separate data points', () => {
        const sig = `tk 1 tab po qd`;

        expect(returnSingleOrMultiplePhrases(sig)).toStrictEqual({
            quantity: 1
        });

        const sig2 = `tk 1 t po q 4 h x 10 days`;

        expect(returnSingleOrMultiplePhrases(sig2)).toStrictEqual({
            quantity: 1,
            hours: 4,
            days: 10
        });
    });

    test('it will grab the correct data', () => {
        const sig = `tk 2 t po q 12 h x 10 days`;

        expect(returnSingleOrMultiplePhrases(sig)).toStrictEqual({
            quantity: 2,
            hours: 12,
            days: 10
        });

    });

    test('it will parse incomplete sigs and get data', () => {
        const sig = `1 t po qd for x 10 days`;
        expect(returnSingleOrMultiplePhrases(sig)).toStrictEqual({
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

        const converted = returnSingleOrMultiplePhrases(sig);
        expect(converted).toStrictEqual([{
            quantity: 1,
            weeks: 2
        },
        {
            quantity: 2
        }
        ]);
    });

    test('it will parse a complex sig and gather the required data', () => {
        const sig = `Tk 1 tab po qd x 4 wks, then taper to 1 tab po qod x 2 wks`;

        const converted = returnSingleOrMultiplePhrases(sig)

        expect(converted).toStrictEqual([{
            quantity: 1,
            weeks: 4,
        }, {
            taper: 1,
            qod: true,
            weeks: 2
        }]);
    });

    test('it will parse data from non plural words', () => {
        const sig = 'tk 1 t po for 1 wk';
        const sig2 = 'tk 2 t po for 1 day';
        const convert = returnSingleOrMultiplePhrases(sig);
        const convert1 = returnSingleOrMultiplePhrases(sig2);
        expect(convert).toStrictEqual({
            quantity: 1,
            weeks: 1
        });

        expect(convert1).toStrictEqual({
            quantity: 2,
            days: 1
        });

    });

})