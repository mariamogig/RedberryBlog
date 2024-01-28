const http = require('http');
const httpProxy = require('http-proxy');

const target = 'https://api.blog.redberryinternship.ge';

const proxy = httpProxy.createProxyServer({});

const server = http.createServer((req, res) => {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  proxy.web(req, res, { target });
});

console.log('Proxy server listening on port 3000');
server.listen(3000);
