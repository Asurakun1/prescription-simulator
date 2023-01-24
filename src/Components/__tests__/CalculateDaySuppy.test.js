import { tabletExtract, hoursExtract, convertIntoExtractableData } from '../RightHandWindow/FillToClose/CalculateDays';

describe('Day Supply Calculation', () => {

    test('it will split the sig into separate data points', () => {
        const sig = `tk 2 t po q 12 h x 10 days`;

        expect(convertIntoExtractableData(sig)).toBe(['TAKE 2 TABLET', 'BY MOUTH EVERY 12 HOURS', 'FOR 10 DAYS']);

    })

    test('it will extract the tablet information', () => {
        const sig = `tk 2 t po q 12 h x 10 days`;

        expect(tabletExtract(sig)).toBe(2);
    });

    test('it will extract the hours information', () => {
        const sig = `tk 2 t po q 12 h x 10 days`;
    })

})