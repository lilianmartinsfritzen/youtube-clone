module.exports = {
  roots: [
    '<rootDir>/src',
  ],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
  ],
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
};
