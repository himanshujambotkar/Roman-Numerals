# Roman Numeral Converter API & React App

## Description
This project includes:
- A Node.js API that converts integers to Roman numerals (1-3999).
- A React app that interacts with the API.

## Setting up the app
1. Initiated package.json using npm init -y
2. Installed React and React-Dom packages using npm install react react-dom
3. Installed Webpack server, Babel: 
npm install -D webpack webpack-cli webpack-dev-server babel-loader @babel/core @babel/preset-env @babel/preset-react html-webpack-plugin css-loader style-loader
 
## How to Run the Project

### Step 1: Run the API
1. Navigate to the `romannumeral-api` directory.
2. Run `npm install` to install dependencies.

### Step 2: Run the React App
1. Navigate to the `romannumeral-app` directory.
2. Run `npm install` to install dependencies.
3. Start the Backend server using `npm run server` on port 8080, "http://localhost:8080.
4. Start the Frontend server using `npm run start` on port 3000, "http://localhost:3000.
5. `npm run dev` will start the application in development mode, it will run the Frontend server and Backend server concurrently to fetch the data.

## Dependencies
- Express
- React Spectrum (for React UI)
- Adobe React Spectrum (UI component by Adobe, used to implement the dark/light theme and form.
- Babel to compile modern JS code to be compatible with older versions of beowsers, environment.
- Webpack will bundle the HTML, CSS, JS code into a single file for deployment.
- Style loader will inject CSS into the DOM.
- SASS is CSS preprocessor that adds variables, nested rules, mixins, and more to standard CSS.
- SASS-Loader is a loader for Webpack to process Sass files and compile them into CSS.
- html-webpack-plugin is for Webpack to generate an index.html file (or use an existing one) and automatically inject your bundled JavaScript into it.
- Concurrently is to run multiple commands (like starting both the front-end and back-end servers) concurrently in one terminal.
