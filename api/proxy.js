const httpProxy = require("http-proxy");
const cors = require("cors")();

const proxy = httpProxy.createProxyServer();

export default function handler(req, res) {
  cors(req, res, () => {
    const targetUrl =
      "https://fmradiohub.in/play?url=http://mp.techsysug.com:21563/;stream";

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    proxy.web(req, res, { target: targetUrl, changeOrigin: true }, (error) => {
      res.status(500).send("Proxy error");
    });
  });
}
