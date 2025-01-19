import React from 'react';

const ConvertInput = ({ onChange, error, onConvert, value }) => {
  return (
    <div>
        <div className="enter-number-input-field">
            Enter a number
            <input type="text" 
                className={`form-control ${error ? 'input-error' : ''}`}
                onChange={onChange}
                maxLength="4"/>
            {/* Display error below the input field if there's an error */}
            {error && <div className="error">{error}</div>}
        </div>
        <button className="convert-button"
                onClick={onConvert}>
            Convert to roman numeral
        </button>
    </div>
  );
};

export default ConvertInput;
