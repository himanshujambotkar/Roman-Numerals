import React from 'react';

const ConvertOutput = ({ value }) => {
  return (
    <div>
        <strong>Roman numeral:</strong> 
        <span className="roman-value">{value}</span>
    </div>
  );
};

export default ConvertOutput;
