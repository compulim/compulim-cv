const { promisify } = require('util');
const { writeFile } = require('fs');

async function main() {
  const [content, filename] = process.argv.slice(2);

  await promisify(writeFile)(filename, content);

  console.log(`Tag written to "${ filename }"`);
}

main().catch(err => {
  console.error(err);
  process.exit(-1);
});
