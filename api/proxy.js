// api/proxy.js

export default async (req, res) => {
  try {
    const fetch = await import("node-fetch").then((mod) => mod.default);

    const targetUrl = "http://mp.techsysug.com:21563/;stream";
    const fetchResponse = await fetch(targetUrl);

    // Check if the fetch request was successful
    if (!fetchResponse.ok) {
      throw new Error(`HTTP error! Status: ${fetchResponse.status}`);
    }

    // Forward the response headers to the client
    const headers = new Headers(fetchResponse.headers);
    res.writeHead(fetchResponse.status, Object.fromEntries(headers));

    // Stream the response body directly to the client
    fetchResponse.body.pipe(res);
  } catch (error) {
    console.error("Error fetching stream:", error);
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Internal Server Error");
  }
};
