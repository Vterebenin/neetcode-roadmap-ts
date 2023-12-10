import * as fs from 'fs';
import * as path from 'path';

const IGNORE_LIST = [
  'src/const.ts',
  'src/getHints.ts',
  'src/index.ts',
  'src/utils.ts',
];

function findJsFiles(directory: string): string[] {
  const jsFiles: string[] = [];
  const files = fs.readdirSync(directory);

  for (const file of files) {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      jsFiles.push(...findJsFiles(filePath));
    } else if (
      file.endsWith('.ts') &&
      !IGNORE_LIST.includes(filePath) &&
      !file.endsWith('index.ts')
    ) {
      jsFiles.push(filePath);
    }
  }

  return jsFiles;
}

function extractCommentsFromFile(filePath: string): string[] {
  const content = fs.readFileSync(filePath, 'utf-8');
  const multilineComments = content.match(/\/\*[\s\S]*?\*\//g) || [];

  return multilineComments;
}

function printCommentsWithHint(comments: string[]) {
  for (const comment of comments) {
    if (comment.includes('HINT')) {
      console.log(comment);
      console.log();
    }
  }
}

function main() {
  const directory = './src';
  const jsFiles = findJsFiles(directory);

  for (const jsFile of jsFiles) {
    const comments = extractCommentsFromFile(jsFile);
    console.log(`${jsFile.replaceAll('src/', '')}:`);
    printCommentsWithHint(comments);
  }
}

main();
