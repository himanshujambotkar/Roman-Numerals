import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ConvertInput from './ConvertInput';

describe('ConvertInput Component', () => {
  const mockOnChange = jest.fn();
  const mockOnConvert = jest.fn();

  it('renders correctly', () => {
    render(
      <ConvertInput 
        onChange={mockOnChange} 
        onConvert={mockOnConvert} 
        value="" 
        error="" 
      />
    );
    
    // Check that input field and button render
    expect(screen.getByLabelText(/Enter a number/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Convert to Roman Numeral/i })).toBeInTheDocument();
  });

  it('calls onChange handler when input value changes', () => {
    render(
      <ConvertInput 
        onChange={mockOnChange} 
        onConvert={mockOnConvert} 
        value="" 
        error="" 
      />
    );

    const inputField = screen.getByLabelText(/Enter a number/i);
    userEvent.type(inputField, '123');

    // Assert the onChange handler was called for each keypress
    expect(mockOnChange).toHaveBeenCalledTimes(3); // 3 characters entered
  });

  it('calls onConvert handler when the Convert button is clicked', () => {
    render(
      <ConvertInput 
        onChange={mockOnChange} 
        onConvert={mockOnConvert} 
        value="123" 
        error="" 
      />
    );

    const button = screen.getByRole('button', { name: /Convert to Roman Numeral/i });
    userEvent.click(button);

    // Assert the onConvert handler was called
    expect(mockOnConvert).toHaveBeenCalled();
  });

  it('displays an error message when there is an error', () => {
    render(
      <ConvertInput 
        onChange={mockOnChange} 
        onConvert={mockOnConvert} 
        value="" 
        error="Please enter a valid number." 
      />
    );

    // Check for error message
    expect(screen.getByText(/Please enter a valid number./i)).toBeInTheDocument();
  });
});
