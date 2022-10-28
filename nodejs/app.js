const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") res.write("Hello from Home");
  else if (req.url === "/about") res.write("Hello from about 2");
  res.end();
});

server.listen(3000, () => {
  console.log("server is listening on port 3000");
});
