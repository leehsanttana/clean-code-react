module.exports = {
  roots: ["<rootDir>/src"],
  colletctCoverageForm: ["<rootDir>/src//**/*.{ts,tsx}"],
  coverageDirectory: "coverage",
  testEnvironment: "node",
  transform: {
    ".+\\.ts$": "ts-jest",
  },
};
