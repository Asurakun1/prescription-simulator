import { daySupply, remainingQuantity, calculateIndividualDataSets } from "../RightHandWindow/FillToClose/CalculateDaySupply";
import { returnSingleOrMultiplePhrases } from "../RightHandWindow/FillToClose/DataExtractor";

describe('Day supply calculation on multiple sig phrases', () => {
    test('take 1 tablet by mouth for 2 weeks, the increase to 2 tablet by mouth every day if tolerated', () => {
        const sig = `Tk 1 tab po qd x 2 wks, then increase to 2 tab po qd if tolerated`;
        let quantity = 30;
        const sigDataSet = returnSingleOrMultiplePhrases(sig);

        expect(calculateIndividualDataSets(sigDataSet, quantity)).toBe(22);

    });

    test('take 2 tablet by mouth every day for 5 days, then taper to 1 tablet by mouth every day', () => {
        const sig = `tk 2 t po qd x 5 days, then taper to 1 t po qd`;
        let quantity = 30;
        const sigDataSet = returnSingleOrMultiplePhrases(sig);

        expect(calculateIndividualDataSets(sigDataSet, quantity)).toBe(25);
    });

    test('take 1 tablet by mouth every day for 4 weeks, then taper to 1 tablet by mouth every other day for 2 weeks', () => {
        const sig = `tk 1 t po qd x 4 wks, then taper to 1 t po qod x 2 wks`;
        const quantity = 35;
        const sigDataSet = returnSingleOrMultiplePhrases(sig);

        expect(calculateIndividualDataSets(sigDataSet, quantity)).toBe(42);
    });

    test('take 2 tablet by mouth every 12 hours for 10 days', () => {
        const sig = `tk 2 t po q 12 h x 10 days`;
        const quantity = 40;
        const sigDataSet = returnSingleOrMultiplePhrases(sig);

        expect(calculateIndividualDataSets(sigDataSet, quantity)).toBe(10);
    });

});