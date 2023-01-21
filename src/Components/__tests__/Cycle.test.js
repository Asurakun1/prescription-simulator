import { render, fireEvent } from '@testing-library/react';
import Cycle from '../LeftHandWindow/Cycle/Cycle';

describe('Cycle Component', () => {
  test('it will increment the position', () => {
    const array = [0, 1, 2, 3, 4, 5];
    let currentID = 0;
    const setCurrentID = (id) => {
      currentID = currentID + id;
    }

    const { getByText } = render(<Cycle setID={setCurrentID} currentID={currentID} RxLength={array.length} />);
    const button = getByText('Next Rx');
    fireEvent.click(button);
    expect(currentID).toBe(1);

  });


  test('it will not go out of bounds upon increment', () => {
    const array = [0, 1, 2, 3, 4, 5];

    let currentID = 0;
    const setCurrentID = (id) => {
      currentID = id;
    }
    const { getByText, rerender } = render(<Cycle setID={setCurrentID} currentID={currentID} RxLength={array.length} />);
    const button = getByText('Next Rx')

    for (let i = 0; i < 10; i++) {
      fireEvent.click(button);
      rerender(<Cycle setID={setCurrentID} currentID={currentID} RxLength={array.length} />);
    }
    expect(array[currentID]).toBeDefined();
  });

  
  test('it will not go out of bounds upon decrement', () => {
    const array = [0, 1, 2, 3, 4, 5];

    let currentID = array.length - 1;
    const setCurrentID = (id) => {
      currentID = id;
    }
    const { getByText, rerender } = render(<Cycle setID={setCurrentID} currentID={currentID} RxLength={array.length} />);
    const button = getByText('Prev Rx');

    for (let i = array.length; i > 0; i--) {
      fireEvent.click(button);
      rerender(<Cycle setID={setCurrentID} currentID={currentID} RxLength={array.length} />);
    }
    expect(array[currentID]).toBeDefined();
  });

});