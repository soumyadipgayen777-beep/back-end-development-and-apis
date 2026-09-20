// Starter file — add your code here
const http = require("http");
const fs = require("fs");

console.log(fs);

console.log(fs.readFile("assets/poem.txt", { encoding: "utf8" }, (err, data) => {
  console.log(data);
}));