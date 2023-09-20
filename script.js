const fs = require("fs");
const path = require("path");
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
      if (err) throw err;
      res.end(data);
    });
  } else if (req.url === "/about") {
    fs.readFile(path.join(__dirname, "about.html"), (err, data) => {
      if (err) throw err;
      res.end(data);
    });
  } else if (req.url === "/contact-me") {
    fs.readFile(path.join(__dirname, "contact-me.html"), (err, data) => {
      if (err) throw err;
      res.end(data);
    });
  } else {
    fs.readFile(path.join(__dirname, "404.html"), (err, data) => {
      if (err) throw err;
      res.end(data);
    });
  }
});

const port = process.env.port || 8080;

server.listen(port, () => {
  console.log("Server is running");
});
