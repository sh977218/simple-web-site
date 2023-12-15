import { promises as fs } from 'fs';
import { join } from 'path';

async function globalSetup() {
  const nycOutput = join(__dirname, '.', '.nyc_output');
  await fs.rm(nycOutput, { recursive: true, force: true });
  await fs.mkdir(nycOutput);
}

export default globalSetup;
