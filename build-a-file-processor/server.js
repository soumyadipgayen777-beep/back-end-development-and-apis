// Starter file — add your code here
const fsPromises = require('fs/promises');
const fs = require('fs');
const crypto = require('crypto');

async function main(){
    const data = await fsPromises.readFile('assets/poem.txt', {
        encoding: 'utf8'
    });
    console.log(data);
}

main();

fs.writeFileSync("assets/output.txt", "Hello, freeCodeCamp!");
fs.appendFileSync("assets/output.txt", "\nWelcome to the course");
console.log(fs.existsSync("assets/output.txt"));
console.log(fs.readdirSync("assets"));

const buf = Buffer.from("Hello, Node!");
console.log(buf);
console.log(buf.toString("hex"));
console.log(buf.toString("base64"));

const buf2 = Buffer.alloc(8, 0xff);
console.log(buf2);

const decoded = Buffer.from("ZnJlZUNvZGVDYW1w", "base64").toString("utf-8");
console.log(decoded);

const hash = crypto.createHash("sha256").update('freeCodeCamp!').digest("hex");
console.log(hash);