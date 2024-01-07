import { join } from 'path';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import NYC from 'nyc';
import { promises as fs } from 'fs';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const coverageThresholds = require('./coverage-thresholds.json');

const PROJECT_ROOT_FOLDER = join(__dirname, '..');

async function globalTeardown() {
  try {
    const nycInstance = new NYC({
      cwd: PROJECT_ROOT_FOLDER,
      reportDir: `coverage-e2e`,
      reporter: ['lcov', 'json', 'text-summary'],
    });
    await nycInstance.checkCoverage(coverageThresholds);
    await nycInstance.report();
  } catch (e) {
    // NYC doesn't throw error when coverage is not met. bug
    console.error('Insufficient playwright code coverage!');
  }
}

export default globalTeardown;
