import { translateSig, checkUserSigInput, CheckSig } from "../RightHandWindow/FillToClose/CheckSigs";

describe('CheckSig', () => {
    test('It will convert the base sig', () => {

        const sig = ' tk 2 t po q 12 h x 10 days '.toUpperCase();

        let converted = translateSig(sig);

        expect(converted).toBe('TAKE 2 TABLET BY MOUTH EVERY 12 HOURS FOR 10 DAYS')
    });

    test('it will convert complicated sigs', () => {
        const sig = 'Tk 1 tab po qd x 2 wks, then increase to 2 tab po qd if tolerated'.toUpperCase();
        let converted = translateSig(sig);

        expect(converted).toBe('TAKE 1 TABLET BY MOUTH EVERY DAY FOR 2 WEEKS THEN INCREASE TO 2 TABLET BY MOUTH EVERY DAY IF TOLERATED');
    });

    test('it will handshake user-input sigs', () => {

        const userSigInput = 'TAKE 1 TABLET BY MOUTH EVERY DAY.';
        const sig = 'TAKE 1 TABLET BY MOUTH EVERY DAY';

        const accepted = checkUserSigInput(userSigInput, sig);

        expect(accepted).toBe(true);

    });

    test('it will compare user sig from untranslated sig', () => {
        const userSigInput = 'TAKE 1 TABLET BY MOUTH EVERY DAY.';
        const sig = 'tk 1 t po qd';

        const accepted = CheckSig(userSigInput, sig);

        expect(accepted).toBe(true);
        
    });

    test('incomplete sigs will fail', () => {
        const userSigInput = 'TAKE 1 TABLET BY MOUTH EVERY DAY.';
        const sig = 'Tk 1 tab po qd x 2 wks, then increase to 2 tab po qd if tolerated';
        const accepted = CheckSig(userSigInput, sig);

        expect(accepted).toBe(false);
    });
});