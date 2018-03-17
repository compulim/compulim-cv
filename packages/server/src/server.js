import http from 'http';
import httpProxy from 'http-proxy';

export default function server() {
  const proxy = httpProxy.createProxyServer({});

  const app = http.createServer((req, res) => {
    proxy.web(req, res, {
      target: 'http://localhost:4001',
      ws: true
    });
  });

  app.listen(process.env.PORT || 4000);
}
