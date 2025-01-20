const express = require('express');
const path = require('path');
const cors = require('cors');

// Reuse the `convertToRoman` function
const convertToRoman = (num) => {
  const romanNumerals = [
    { value: 1000, symbol: 'M' },
    { value: 900, symbol: 'CM' },
    { value: 500, symbol: 'D' },
    { value: 400, symbol: 'CD' },
    { value: 100, symbol: 'C' },
    { value: 90, symbol: 'XC' },
    { value: 50, symbol: 'L' },
    { value: 40, symbol: 'XL' },
    { value: 10, symbol: 'X' },
    { value: 9, symbol: 'IX' },
    { value: 5, symbol: 'V' },
    { value: 4, symbol: 'IV' },
    { value: 1, symbol: 'I' },
  ];

  let result = '';
  for (let i = 0; i < romanNumerals.length; i++) {
    while (num >= romanNumerals[i].value) {
      result += romanNumerals[i].symbol;
      num -= romanNumerals[i].value;
    }
  }
  return result;
};

const app = express();
const PORT = 8080;

// Serve the React app from the "dist" folder
app.use(express.static(path.join(__dirname, 'dist')));
const corsOptions = {
  origin: 'http://localhost:3000',
};
app.use(cors(corsOptions));

// API route for Roman numeral conversion
app.get('/romannumeral', (req, res) => {
  const query = req.query.query;
  
  // Ensure the query exists and is a valid number
  if (!query) {
    return res.status(400).send('Error: Query parameter "query" is required.');
  }

  const number = parseInt(query, 10);

  if (isNaN(number) || number < 1 || number > 3999) {
    return res.status(400).send('Error: Input must be an integer between 1 and 3999.');
  }

  // Convert to Roman numeral
  const romanNumeral = convertToRoman(number);

  // Return JSON response
  res.json({
    input: query,
    output: romanNumeral,
  });
});

// Catch-all route to serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
