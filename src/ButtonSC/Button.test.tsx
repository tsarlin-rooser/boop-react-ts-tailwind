import '@testing-library/jest-dom/extend-expect';
import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { TestButton as Button } from './Button.stories';

describe('Button', () => {
  it('should render the button without crashing', () => {
    const { getByRole } = render(<Button onClick={() => null} text='test' />);
    expect(getByRole('button')).toBeInTheDocument();
  });

  it('should call the onClick method when a user clicks on the button', () => {
    const mockClick = jest.fn();
    const { getByRole } = render(<Button text='test' onClick={mockClick} />);
    const buttonElement = getByRole('button');

    fireEvent.click(buttonElement);

    expect(mockClick).toHaveBeenCalledTimes(1);
  });
});
