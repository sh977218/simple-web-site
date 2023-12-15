import { join } from 'path';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import NYC from 'nyc';
import { promises as fs } from 'fs';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const coverageThresholds = require('../e2e-app/coverage-thresholds.json');

async function globalTeardown() {
  try {
    const nycOutput = join(__dirname, '.', '.nyc_output');
    const nycInstance = new NYC({
      cwd: join(__dirname, '.'),
      reportDir: `coverage-e2e`,
      reporter: ['lcov', 'json', 'text-summary'],
    });
    await nycInstance.checkCoverage(coverageThresholds);
    await nycInstance.report();
    await fs.rm(nycOutput, { recursive: true, force: true });
  } catch (e) {
    // NYC doesn't throw error when coverage is not met. bug
    console.error('Insufficient playwright code coverage!');
  }
}

export default globalTeardown;
