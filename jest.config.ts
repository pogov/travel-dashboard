import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  verbose: true,
  setupFilesAfterEnv: ['./setupTests.ts'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  }
};
export default config;