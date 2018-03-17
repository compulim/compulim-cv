const { readFile } = require('fs');

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
  const content = await promisify(readFile)(process.argv[2], { encoding: 'utf8' });

  console.log(content.replace(DOCKER_TAG_PATTERN, `$1:${ process.argv[3] }`));
}

main().catch(err => {
  console.error(err);
  process.exit(-1);
});
