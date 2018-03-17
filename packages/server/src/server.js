import http from 'http';
import httpProxy from 'http-proxy';

const DEFAULT_HOST_PORT = '4001';

const HOST_PORT = {
  'compulim.info': '4001',
  'www.compulim.info': '4001',
  'pixelduet.com': '4002',
  'www.pixelduet.com': '4002'
};

export default function server() {
  const proxy = httpProxy.createProxyServer({});

  const app = http.createServer((req, res) => {
    proxy.web(req, res, {
      target: `http://localhost:${ HOST_PORT[req.headers.host] || DEFAULT_HOST_PORT }`,
      ws: true
    });
  });

  app.listen(process.env.PORT || 4000);
}
