// asynchronous
// bya3te nafes el wa2et la, kell

const request = require("http").request;

const start = Date.now();

request("http://localhost:5000", (res) => {
  res.on("data", () => {});
  res.on("end", () => {
    console.log(Date.now() - start);
  });
}).end();

request("http://localhost:5000", (res) => {
  res.on("data", () => {});
  res.on("end", () => {
    console.log(Date.now() - start);
  });
}).end();

request("http://localhost:5000", (res) => {
  res.on("data", () => {});
  res.on("end", () => {
    console.log(Date.now() - start);
  });
}).end();
