module.exports = {
  displayName: 'apps',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.(ts|js|html|css)$': 'ts-jest',
  },
  collectCoverageFrom: [
    'src/**/*.{ts,js}',
    '!**/node_modules/**',
    '!**/src/main.ts',
    '!**/src/polyfills.ts',
  ],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.spec.json',
    },
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  moduleFileExtensions: ['ts', 'js', 'html', 'json'],
  coverageDirectory: '../../coverage/apps/my-app',
};
