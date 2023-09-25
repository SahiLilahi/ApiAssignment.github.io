const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h1>Welcome</h1>");
  res.end();
});

app.listen(PORT, () => {
  console.log(`server listening on http://localhost:${PORT}`);
});
