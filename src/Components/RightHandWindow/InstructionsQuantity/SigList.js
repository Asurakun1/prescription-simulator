export const sigList = (textArray) => {
    const arr = textArray.map((element) => {
        switch (element) {

            case 'ATN':
                element = 'AT NIGHT';
                break;
            case 'AIDO':
                element = "AFTER INITIAL DOSE";
                break;
            case 'ALT':
                element = 'ALTERNATE';
                break;
            case 'AB':
                element = 'BOTH';
                break;
            case 'AC':
                element = 'BEFORE MEALS';
                break;
            case 'PC':
                element = 'AFTER MEALS';
                break;
            case 'AEA':
                element = 'IN AFFECTED EAR(S)';
                break;
            case 'AEY':
                element = 'IN AFFECTED EYE(S)';
                break;
            case 'C':
                element = 'CAPSULE';
                break;
            case 'BID':
                element = "TWICE DAILY";
                break;
            case 'TID':
                element = "THREE TIMES DAILY";
                break;
            case 'QID':
                element = 'FOUR TIMES DAILY';
                break;
            case 'FID':
                element = 'FIVE TIMES DAILY';
                break;
            case 'TK':
                element = 'TAKE';
                break;
            case 'T':
                element = 'TABLET';
                break;
            case 'PO':
                element = "BY MOUTH";
                break;
            case 'QD':
                element = "EVERY DAY";
                break;
            case 'QOD':
                element = 'EVERY OTHER DAY';
                break;
            case 'Q':
                element = "EVERY";
                break;
            case 'PRN':
                element = "AS NEEDED";
                break;
            case 'UTD':
                element = "AS DIRECTED";
                break;
            case 'H':
                element = "HOURS";
                break;
            case 'HS':
                element = 'AT BEDTIME';
                break;
            case 'AA':
                element = "TO THE AFFECTED AREA";
                break;
            case 'APP':
                element = "APPLY";
                break;
            case 'AD':
                element = "RIGHT EAR";
                break;
            case 'AS':
                element = 'LEFT EAR';
                break;
            case 'AU':
                element = 'BOTH EARS';
                break;
            case 'OD':
                element = 'RIGHT EYE';
                break;
            case 'OS':
                element = 'LEFT EYE';
                break;
            case 'OU':
                element = 'BOTH EYES';
                break;
            case 'SC':
                element = 'UNDER THE SKIN';
                break;
            case 'SL':
                element = 'UNDER THE TONGUE';
                break;
            case 'P':
                element = 'FOR PAIN';
                break;
            case 'GTT':
                element = 'DROP';
                break;
            default:
                return element;
        }
        return element;
    });

    return arr;
}