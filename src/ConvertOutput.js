import React from 'react';

const ConvertOutput = ({ value }) => {
  return (
    <div className="output">
      <strong>Roman Numeral:</strong> 
      <span className="roman-value">{value}</span> {/* Display the converted value */}
    </div>
  );
};

export default ConvertOutput;
