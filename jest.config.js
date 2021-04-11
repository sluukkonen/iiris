/* eslint-disable import/no-commonjs */

module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  coverageProvider: 'babel',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules', '/test.js', '/index.js'],
}
