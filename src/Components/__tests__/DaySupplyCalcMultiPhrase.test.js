import { daySupply, remainingQuantity, calculateIndividualDataSets } from "../RightHandWindow/FillToClose/CalculateDaySupply";
import { returnSingleOrMultiplePhrases } from "../RightHandWindow/FillToClose/DataExtractor";

describe('Day supply calculation on multiple sig phrases', () => {
    test('take 1 tablet by mouth for 2 weeks, the increase to 2 tablet by mouth every day if tolerated', () => {
        const sig = `Tk 1 tab po qd x 2 wks, then increase to 2 tab po qd if tolerated`;
        let quantity = 30;
        const sigDataSet = returnSingleOrMultiplePhrases(sig);

        expect(calculateIndividualDataSets(sigDataSet, quantity)).toBe(22);

    });

});