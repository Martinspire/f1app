module.exports = {
  displayName: 'formule1',

  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.(html|svg)$',
    },
  },
  coverageDirectory: '../../coverage/apps/formule1',
  transform: {
    '^.+\\.(ts|mjs|js|html)$': 'jest-preset-angular',
    "node_modules/three/examples/jsm/.+\\.(j|t)s?$": "ts-jest"
  },
  transformIgnorePatterns: [
    '/node_modules/(?!@ionic|three/examples/jsm/).+\\.js$'
  ],
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
  preset: '../../jest.preset.ts',
};
