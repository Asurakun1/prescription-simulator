import { convertIntoExtractableData } from '../RightHandWindow/FillToClose/CalculateDays';

describe('Day Supply Calculation', () => {

    test('it will split the sig into separate data points', () => {
        const sig = `1 tab po qd`;

        expect(convertIntoExtractableData(sig)).toStrictEqual({
            quantity: 1
        })

        const sig2 = `tk 2 t po qd`;
        expect(convertIntoExtractableData(sig2)).toStrictEqual({
            quantity: 2
        })

        const sig3 = `tk 4 t po qd x 10 days`;

        expect(convertIntoExtractableData(sig3)).toStrictEqual({
            quantity: 4,
            duration: 10
        });
    });

})