const httpProxy = require('http-proxy');
const url = require('url');

const proxy = httpProxy.createProxyServer();

export default function handler(req, res) {
  const targetUrl = 'https://fmradiohub.in/play?url=http://mp.techsysug.com:21563/;stream';
  const queryString = url.parse(req.url).query;

  proxy.web(req, res, { target: `${targetUrl}&${queryString}`, changeOrigin: true }, (error) => {
    res.status(500).send('Proxy error');
  });
}
