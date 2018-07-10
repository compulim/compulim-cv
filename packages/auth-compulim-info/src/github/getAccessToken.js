import { URL, URLSearchParams } from 'url';
import fetch from 'node-fetch';

export default async function (clientID, clientSecret, code, redirectURI, state) {
  const url = new URL('https://github.com/login/oauth/access_token');

  url.search = new URLSearchParams({
    client_id: clientID,
    client_secret: clientSecret,
    code,
    redirect_uri: redirectURI,
    state
  }).toString();

  const res = await fetch(
    url.toString(),
    { method: 'POST' }
  );

  if (res.ok) {
    const form = new URLSearchParams(await res.text());

    if (form.error) {
      throw new Error(form.error_description);
    }

    return form.get('access_token');
  } else {
    throw new Error(`server returned ${ res.status }`);
  }
}
