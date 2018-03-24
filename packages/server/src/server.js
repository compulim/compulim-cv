import http from 'http';
import httpProxy from 'http-proxy';

const HOST_PORT = {
  'compulim.info': '4001',
  'www.compulim.info': '4001',
  'pixelduet.com': '4002',
  'www.pixelduet.com': '4002'
};

export default function server() {
  const proxy = httpProxy.createProxyServer({});

  const app = http.createServer((req, res) => {
    const targetPort = HOST_PORT[req.headers.host];

    if (targetPort) {
      proxy.web(req, res, {
        target: `http://localhost:${ targetPort }`,
        ws: true
      });
    } else if (req.url === '/health.txt') {
      res.statusCode = 200;
      res.end('OK');
    } else {
      res.statusCode = 404;
      res.end();
    }
  });

  app.listen(process.env.PORT || 4000);
}
