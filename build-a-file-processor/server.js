// Starter file — add your code here
const fsPromises = require('fs/promises');
const fs = require('fs');

async function main(){
    const data = await fsPromises.readFile('assets/poem.txt', {
        encoding: 'utf8'
    });
    console.log(data);
}

main();

fs.writeFileSync("assets/output.txt", "Hello, World");