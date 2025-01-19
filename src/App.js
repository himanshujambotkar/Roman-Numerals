import React, { useState } from 'react';
import './App.scss';
import ConvertInput from './ConvertInput';
import ConvertOutput from './ConvertOutput';
import convertToRoman from './convertToRoman'; // Import the function

const App = () => {
  const [output, setOutput] = useState(""); // Using useState for state management
  const [error, setError] = useState("");  // State to handle error messages
  const [inputValue, setInputValue] = useState(""); // State to store the input value

  const handleInputChange = (e) => {
    setInputValue(e.target.value); // Update the inputValue state as the user types
  };

  const handleConvertClick = () => {
    const number = parseInt(inputValue);

    // Validate the input to be a number within the range of 1-3999
    if (isNaN(number) || number < 1 || number > 3999) {
      setError("Please enter a number between 1 and 3999.");
      setOutput(""); // Clear the output if the input is invalid
    } else {
      setError(""); // Clear the error message if the input is valid
      setOutput(convertToRoman(number)); // Use the imported function to update the output
    }
  };

  return (
    <div className="container">
      <h1>Roman numeral converter</h1>
      <ConvertInput 
        value={inputValue} 
        onChange={handleInputChange} 
        onConvert={handleConvertClick} 
        error={error} 
      />
      <ConvertOutput value={output} />
    </div>
  );
};

export default App;