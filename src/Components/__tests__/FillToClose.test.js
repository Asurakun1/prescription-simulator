import { render, fireEvent} from '@testing-library/react';
import FillToClose from '../RightHandWindow/FillToClose/FillToClose';


describe('FillToClose Component', () => {
    const path = require('path');
    const fs = require('fs');
    const object = JSON.parse(fs.readFileSync(path.resolve(__dirname, './Erx.json'), 'utf-8'));

    test(`It verify's the drug name`, () => {
        const Patient = object[0]
        const drugName="AMOXICILLIN 500MG TABLET";
        const {getByRole, rerender} = render(<FillToClose drugName={drugName} Patient={Patient}/>);
        const button = getByRole('verify');
        fireEvent.click(button);

        rerender(<FillToClose />);
        expect();
    });
});