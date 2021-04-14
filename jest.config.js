const { defaults } = require('jest-config');

module.exports = {
  globals: {
    'ts-jest': {
      isolatedModules: true,
      diagnostics: {
        // Ts jest will ignore the 'Null not assignable to type error, removed so that we could build a superficial aws object in the VinAssociationHandler test'
        ignoreCodes: [],
      },
    },
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    ...defaults.transform,
    '^.+\\.js$': 'ts-jest',
  },
  clearMocks: true,
  resetMocks: true,
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
    ['jest-watch-directories', { directories: ['lib/*'] }],
  ],
  setupFilesAfterEnv: [],
  cacheDirectory: './jest/cache',
};
