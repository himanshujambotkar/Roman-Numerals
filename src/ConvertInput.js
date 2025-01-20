import React from 'react';
 // Importing Spectrum components
import { TextField, Button, Flex } from '@adobe/react-spectrum';

const ConvertInput = ({ onChange, error, onConvert, value }) => {
  return (
    <Flex direction="column">
      <TextField 
        label="Enter a number"
        type="text" 
        isInvalid={!!error}
        onChange={onChange} 
        value={value} 
        maxLength="4" 
        width="60%"
      />
      {/* Display error below the input field if there's an error */}
      {error && <div className="error">{error}</div>}
      {/* Convert button */}
      <Button 
        variant="primary" 
        type="submit"
        onPress={onConvert} 
        width="240px" 
        marginTop="size-400"
        marginBottom="size-400"
      >
        Convert to Roman Numeral
      </Button>
    </Flex>
  );
};

export default ConvertInput;
