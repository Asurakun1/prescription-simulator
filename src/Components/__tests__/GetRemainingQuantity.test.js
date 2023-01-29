import { remainingQuantity } from "../RightHandWindow/FillToClose/CalculateDaySupply";
import { returnSingleOrMultiplePhrases } from "../RightHandWindow/FillToClose/DataExtractor";
describe('Get the remaining quantity from a single sig phrase', () => {
    /**
     * This section will be to test for the remaining quantity of the given rx
     */

    test('it will return the remaining quantity from a sig', () => {
        const sig = `tk 2 t po qd x 5 days`;
        const quantity = 30;
        const sigDataSet = returnSingleOrMultiplePhrases(sig);

        expect(remainingQuantity(sigDataSet, quantity)).toBe(20);
    });

    test('take 3 tablet by mouth every 6 hours', () => {
        const sig = `tk 3 t po q 6 h`;
        const quantity = 30;
        const sigDataSet = returnSingleOrMultiplePhrases(sig);
        expect(remainingQuantity(sigDataSet, quantity)).toBe(18);
    });

    test('take 4 tablet by mouth every day for 2 weeks', () => {
        const sig = `tk 4 t po qd x 2 wks`;
        const quantity = 60;
        const sigDataSet = returnSingleOrMultiplePhrases(sig);

        expect(remainingQuantity(sigDataSet, quantity)).toBe(4);
    });

    test('take 3 tablet by mouth every 8 hours for 2 days', () => {
        const sig = `tk 3 t po q 8 h x 2 days`;
        const quantity = 30;
        const sigDataSet = returnSingleOrMultiplePhrases(sig);

        expect(remainingQuantity(sigDataSet, quantity)).toBe(12);
    });

    test('take 3 tablet by mouth every 6 hours for 1 weeks', () => {
        const sig = `tk 3 t po q 6 h x 1 wks`;
        const quantity = 84;
        const sigDataSet = returnSingleOrMultiplePhrases(sig);

        expect(remainingQuantity(sigDataSet, quantity)).toBe(0);
    });
});