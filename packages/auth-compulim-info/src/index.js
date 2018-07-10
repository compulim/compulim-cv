import { config } from 'dotenv';

config();

import express from 'express';
import getPort from 'get-port';
import createGitHubRouter from './github/router';

async function main() {
  const app = express();
  const port = process.env.PORT || await getPort(4003);

  app.use('/github', createGitHubRouter());

  app.listen(port, () => {
    console.log(`Server is listening to port ${ port }`);
  });
}

main();
