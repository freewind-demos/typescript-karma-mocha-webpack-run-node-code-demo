import fs from 'fs';

export default function readFile(filepath: string): string {
  return fs.readFileSync(filepath, 'utf-8');
}
