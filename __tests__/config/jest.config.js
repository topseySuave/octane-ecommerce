module.exports = {
  coveragePathIgnorePatterns: [
    'node_modules/',
    '<rootDir>/__tests__/config/',
  ],
  coverageReporters: ['lcov', 'html'],
  moduleFileExtensions: ['ts','tsx','js','jsx'],
  moduleNameMapper: {
    '^components/(.*)$': '<rootDir>/components/$1',
    '^lib/(.*)$': '<rootDir>/lib/$1',
    '\\.(scss)$': 'identity-obj-proxy',
    "^lodash-es$": "lodash"
  },
  rootDir: '../../',
  setupFiles: [
    '<rootDir>/__tests__/config/jest.shim.js',
    '<rootDir>/__tests__/config/jest.setup.js',
  ],
  snapshotSerializers: ['jest-serializer-html'],
  testMatch: ['**/?(*.)test.(ts|tsx|js)'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  transform: {
    '^.+\\.(ts|tsx|js)$': 'babel-jest',
  },
};
