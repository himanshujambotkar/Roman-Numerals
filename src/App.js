import React, { useState } from 'react';
// Importing Provider and both themes from Adobe React Spectrum to be used as UI component library.
import { Provider, defaultTheme, darkTheme, Flex, Button } from '@adobe/react-spectrum';
// CSS file for styling
import './App.scss';
// Importing component which includes form and button.
import ConvertInput from './ConvertInput';
// Importing component which will display the output.
import ConvertOutput from './ConvertOutput';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  // Initializing the state to false for dark mode.
  const [isDarkMode, setIsDarkMode] = useState(false); 

  const handleInputChange = (value) => {
    setInputValue(value);
    // Clear the error when input changes
    setError(''); 
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
        
        <Flex alignItems={{base: 'flex-start', M: 'center'}} 
            direction={{ base: 'column', M: 'row' }}
            justifyContent="space-between">
          <h1>Roman numeral converter</h1>
          {/* Toggle button to switch between light and dark mode */}
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