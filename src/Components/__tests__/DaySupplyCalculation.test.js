import { returnSingleOrMultiplePhrases } from "../RightHandWindow/FillToClose/DataExtractor";
import { daySupply, calculateIndividualDataSets, remainingQuantity } from "../RightHandWindow/FillToClose/CalculateDaySupply";

describe('Day supply calculation', () => {

    /**
     * test cases start with very simple sigs and very simple calculations
     * as we move down the test each test will be slightly more complex
     * and each test will handle certain possible edge cases in the sig
     */

    test('take 1 tablet by mouth every day', () => {
        const sig = `tk 1 t po qd`;
        const quantity = 90;

        const sigDataSet = returnSingleOrMultiplePhrases(sig);

        expect(calculateIndividualDataSets(sigDataSet, quantity)).toBe(90);
    });

    test('take 2 tablet by mouth every day', () => {
        const sig = `tk 3 t po qd`;
        const quantity = 30;

        const sigDataSet = returnSingleOrMultiplePhrases(sig);

        expect(daySupply(sigDataSet, quantity)).toBe(10);
    })

    test('take 1 tablet by mouth every day for 1 week', () => {
        const sig = `tk 1 t po qd x 1 wk`;
        const quantity = 30;
        const sigDataSet = returnSingleOrMultiplePhrases(sig);

        expect(daySupply(sigDataSet, quantity)).toBe(7);
    });

    test('take 1 tablet by mouth for 1 day', () => {
        const sig = `tk 1 t po x 1 day`;
        const quantity = 30;
        const sigDataSet = returnSingleOrMultiplePhrases(sig);

        expect(daySupply(sigDataSet,quantity)).toBe(1);
    });

    test('take 10 tablet by mouth every 8 hours', () => {
        const sig = `tk 10 t po q 8 h`;
        const quantity = 30;

        const sigDataSet = returnSingleOrMultiplePhrases(sig);

        expect(daySupply(sigDataSet, quantity)).toBe(30);
    })

    test('take 1 tablet by mouth everyday for 30 days', () => {
        const sig = `tk 1 t po qd x 30 days`;
        const quantity = 30;

        const sigDataSet = returnSingleOrMultiplePhrases(sig);

        expect(daySupply(sigDataSet, quantity)).toBe(30);
    });

    test('take 1 tablet my mouth every day for 10 days', () => {
        const sig = `tk 1 t po qd x 10 days`;
        const quantity = 30;

        const sigDataSet = returnSingleOrMultiplePhrases(sig);
        expect(daySupply(sigDataSet, quantity)).toBe(10);
    });

    test('take 2 tablet by mouth every 12 hours for 3 days', () => {
        const sig = `tk 2 t po q 12 h x 3 days`;
        const quantity = 30;
        const sigDataSet = returnSingleOrMultiplePhrases(sig);

        expect(daySupply(sigDataSet, quantity)).toBe(3);
    });

    test('take 1 tablet by mouth for 2 weeks', () => {
        const sig = `tk 1 t po x 2 wks`;
        const quantity = 50;
        const sigDataSet = returnSingleOrMultiplePhrases(sig);

        expect(daySupply(sigDataSet, quantity)).toBe(14);
    });

    test('take 3 tablet by mouth every 6 hours for 1 weeks', () => {
        const sig = `tk 3 t po q 6 h x 1 wks`;
        const quantity = 84;
        const sigDataSet = returnSingleOrMultiplePhrases(sig);

        expect(daySupply(sigDataSet, quantity)).toBe(84);
    });

    test('take half tablet by mouth for 2 weeks', () => {
        const sig = `tk half t po x 2 wks`;
        const quantity = 30;
        const sigDataSet = returnSingleOrMultiplePhrases(sig);
        expect(daySupply(sigDataSet, quantity)).toBe(14);
    });

    test('take 1 tablet by mouth every other day', () => {
        const sig = `tk 1 t po qod`;
        const quantity = 30;
        const sigDataSet = returnSingleOrMultiplePhrases(sig);
        expect(daySupply(sigDataSet, quantity)).toBe(60);
    })
});