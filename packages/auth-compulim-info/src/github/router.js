import { URL, URLSearchParams } from 'url';
import express from 'express';
import generateState from './generateState';
import getAccessToken from './getAccessToken';

export default function () {
  const router = express.Router();

  router.get('/authorize', (req, res) => {
    const params = new URLSearchParams({
      client_id: process.env.GITHUB_CLIENT_ID,
      redirect_uri: 'https://auth.compulim.info/github/complete',
      state: generateState()
    });

    res.set('location', `https://github.com/login/oauth/authorize?${ params.toString() }`);
    res.status(302);
    res.end();
  });

  router.get('/complete', async (req, res) => {
    try {
      const reqURL = new URL(req.url, 'https://auth.compulim.info');
      const code = reqURL.searchParams.get('code');
      const state = reqURL.searchParams.get('state');

      if (state !== generateState()) {
        res.set('location', 'https://www.compulim.info/');
        res.status(302);
        res.end();
      }

      const accessToken = await getAccessToken(
        process.env.GITHUB_CLIENT_ID,
        process.env.GITHUB_CLIENT_SECRET,
        code,
        'https://auth.compulim.info/github/complete',
        state
      );

      const redirectURL = new URL('https://www.compulim.info/');

      redirectURL.search = new URLSearchParams({
        github_access_token: accessToken
      }).toString();

      res.set('location', redirectURL.toString());
      res.status(301).end();
    } catch (err) {
      res.status(500).end();
    }
  });


  return router;
}
