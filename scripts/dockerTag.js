const { readFile, writeFile } = require('fs');
const { basename, extname } = require('path');

const DOCKER_TAG_PATTERN = /(compulim.azurecr.io\/.*?):[\d\w\.-]+/g;

function promisify(fn, context) {
  return function () {
    return new Promise((resolve, reject) => {
      fn.call(context, ...arguments, (err, ...results) => {
        err ? reject(err) : resolve(...results);
      });
    });
  };
}

async function main() {
  const filename = process.argv[2];
  const content = await promisify(readFile)(filename, { encoding: 'utf8' });
  const nextContent = content.replace(DOCKER_TAG_PATTERN, `$1:${ process.argv[3] }`);
  const ext = extname(filename);
  const nextFilename = `${ filename.substr(0, filename.length - ext.length) }-tagged${ ext }`;

  await promisify(writeFile)(nextFilename, nextContent);

  console.log(`Deployment file written to ${ nextFilename }`);
}

main().catch(err => {
  console.error(err);
  process.exit(-1);
});
