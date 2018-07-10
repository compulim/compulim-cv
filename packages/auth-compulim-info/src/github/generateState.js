import { createHash } from 'crypto';

const INTERVAL = 300000;

export default function () {
  const state = [Math.round(Date.now() / 300000), process.env.GITHUB_OAUTH_STATE_SALT].join('|');
  const hash = createHash('sha1');

  hash.update(state);

  return hash.digest('base64');
}
