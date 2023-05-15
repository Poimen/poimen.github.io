const fs = require('fs');
const crypto = require('crypto');
const path = require('path');

function renameFilenameBasedOnHash(file) {
  const outputDir = path.dirname(file);
  console.log(`Processing file ${file} for hashing, output to ${outputDir}`);

  const contents = fs.readFileSync(file);
  const hash = crypto.createHash('md5').update(contents).digest('hex');

  const outFileParts = path.basename(file).split('.');
  outFileParts.splice(1, 0, hash);
  const outputFile = path.join(outputDir, outFileParts.join('.'));

  console.log(`Renaming output file as ${outputFile}`);

  fs.renameSync(file, outputFile);
  return outputFile;
}

function replaceLinkReference(file, oldFilename, newFilename) {
  const outputDir = path.dirname(file);
  console.log(`Processing file ${file} for link replacement, output to ${outputDir}`);

  const oldFile = path.basename(oldFilename);
  const newFile = path.basename(newFilename);

  let contents = fs.readFileSync(file).toString();
  contents = contents.replaceAll(oldFile, newFile);

  fs.writeFileSync(file, contents);
}

const inputFileToHash = path.resolve(process.argv[2]);
const htmlFileToReplaceInputLink = path.resolve(process.argv[3]);

const newFilename = renameFilenameBasedOnHash(inputFileToHash);

replaceLinkReference(htmlFileToReplaceInputLink, inputFileToHash, newFilename);

console.log('Done.');
