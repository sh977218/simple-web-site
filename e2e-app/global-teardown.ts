import { join } from 'path';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import NYC from 'nyc';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const coverageThresholds = require('../e2e-app/coverage-thresholds.json');

async function globalTeardown() {
  const nycInstance = new NYC({
    cwd: join(__dirname, '.'),
    reportDir: `coverage-e2e`,
    reporter: ['lcov', 'json', 'text-summary'],
  });
  nycInstance.report();
  try {
    nycInstance.checkCoverage(coverageThresholds);
  } catch (e) {
    console.error('Insufficient playwright code coverage!');
  } finally {
    nycInstance.cleanup();
  }
}

export default globalTeardown;
