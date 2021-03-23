import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';

// This below import is what gives us the "toBeInTheDocument" method
import '@testing-library/jest-dom/extend-expect';

// As we are using the Component Story Format we can import it from our
// previously written story.
import { SCButton as Button } from './Button.stories';

describe('Button', () => {
  it('should render the button without crashing', () => {
    // render the button and get the getByRole method
    const { getByRole } = render(<Button onClick={() => null} text='test' />);

    // getByRole as its name gets a selector by its role.
    // in this case we're looking for a `button`.
    // then we make sure it's in the document
    expect(getByRole('button')).toBeInTheDocument();
  });

  it('should call the onClick method when a user clicks on the button', () => {
    // mock out our OnClick function
    const mockClick = jest.fn();

    const { getByRole } = render(<Button text='test' onClick={mockClick} />);

    // we store a variable with the button element
    const buttonElement = getByRole('button');

    // Simulate a user clicking on the button
    fireEvent.click(buttonElement);

    expect(mockClick).toHaveBeenCalledTimes(1);
  });
});
