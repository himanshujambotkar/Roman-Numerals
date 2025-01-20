import React, { useState } from 'react';
import { Provider, defaultTheme, darkTheme } from '@adobe/react-spectrum'; // Import both themes
import './App.scss';
import ConvertInput from './ConvertInput';
import ConvertOutput from './ConvertOutput';
import { Button, Flex } from '@adobe/react-spectrum'; // Import Button component

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false); // State to toggle between dark and light mode

  const handleInputChange = (value) => {
    setInputValue(value);
    setError(''); // Clear the error when input changes
  };

  const handleConvertClick = async () => {
    if (!inputValue || isNaN(inputValue)) {
      setError('Please enter a valid number.');
      setOutput('');
      return;
    }
  
    const number = parseInt(inputValue, 10);
  
    if (number < 1 || number > 3999) {
      setError('Please enter a number between 1 and 3999.');
      setOutput('');
      return;
    }
  
    try {
      const response = await fetch(`http://localhost:8080/romannumeral?query=${number}`);
      if (!response.ok) {
        throw new Error(await response.text());
      }
  
      const data = await response.json();
      setOutput(data.output);
      setError('');
    } catch (err) {
      setError(err.message || 'Something went wrong.');
      setOutput('');
    }
  };
  
  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode); // Toggle the theme between true and false
  };

  return (
    <Provider theme={isDarkMode ? darkTheme : defaultTheme}>
      <div className="container">
        
        <Flex alignItems="center" justifyContent="space-between">
          <h1>Roman numeral converter</h1>
          {/* Toggle Button for switching themes */}
          <Button variant="secondary" style="outline"
              width="180px" onPress={toggleTheme}>
             {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </Button>
        </Flex>
        {/* Convert Input Component */}
        <ConvertInput 
          value={inputValue} x
          onChange={handleInputChange} 
          onConvert={handleConvertClick} 
          error={error} 
        />

        {/* Convert Output Component */}
        <ConvertOutput value={output} />

      
      </div>
    </Provider>
  );
};

export default App;