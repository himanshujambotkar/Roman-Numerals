import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import ConvertInput from './ConvertInput';

describe('ConvertInput Component', () => {
    //checking if the component renders correctly
  it('renders correctly', () => {
    render(
      <ConvertInput
        onChange={jest.fn()}
        error=""
        onConvert={jest.fn()}
        value=""
      />
    );

    // check if the input field with label "Enter a number" is present in the DOM.
    expect(screen.getByLabelText(/Enter a number/i)).toBeInTheDocument();

    // ensuring that the button labeled "Convert to Roman Numeral" is present in the DOM.
    expect(
      screen.getByRole('button', { name: /Convert to Roman Numeral/i })
    ).toBeInTheDocument();
  });

  it('calls onChange when input value changes', async () => {
    const mockOnChange = jest.fn();
    render(
      <ConvertInput
        onChange={mockOnChange}
        error=""
        onConvert={jest.fn()}
        value=""
      />
    );

    // Simulate user typing into the input field
    const input = screen.getByLabelText(/Enter a number/i);
    await userEvent.type(input, '123'); // stimulates that the User types "123"

    // Verifies that the onChange handler was called three times 
    expect(mockOnChange).toHaveBeenCalledTimes(3);
  });

  it('calls onConvert when Convert button is clicked', async () => {
    const mockOnConvert = jest.fn();
    render(
      <ConvertInput
        onChange={jest.fn()}
        error=""
        onConvert={mockOnConvert}
        value="123"
      />
    );

    // Simulates the click event
    const button = screen.getByRole('button', {
      name: /Convert to Roman Numeral/i,
    });
    await userEvent.click(button);

    expect(mockOnConvert).toHaveBeenCalled();
  });

  it('displays error message when there is an error', () => {
    render(
      <ConvertInput
        onChange={jest.fn()}
        error="Please enter a valid number."
        onConvert={jest.fn()}
        value=""
      />
    );

    // Checking for error message
    expect(
      screen.getByText(/Please enter a valid number./i)
    ).toBeInTheDocument();
  });
});
