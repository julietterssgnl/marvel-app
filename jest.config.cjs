module.exports = {
    testEnvironment: "jsdom",
    transform: {
      "^.+\\.jsx?$": "babel-jest",
    },
    //ignore e2e tests
    testPathIgnorePatterns: [
      "/e2e-tests/",
      "/tests-examples/"
    ],
    collectCoverageFrom: [
      "src/**/*.{js,jsx}", // Collect coverage from all js or jsx files in src folder
      "!src/**/*.test.{js,jsx}", // Exclude test files from coverage
    ],
    testResultsProcessor: 'jest-sonar-reporter',  
    moduleNameMapper: {
      "d3": "<rootDir>/node_modules/d3/dist/d3.min.js",
    },
  };