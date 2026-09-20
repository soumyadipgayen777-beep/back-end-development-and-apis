// Starter file — add your code here
const fsPromises = require('fs/promises');

async function main(){
    const data = await fsPromises.readFile('assets/poem.txt', {
        enconding: 'utf8'
    });
    console.log(data);
}

main();