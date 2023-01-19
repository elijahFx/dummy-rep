const { readFile, writeFile, read } = require('fs').promises
//const { get } = require('http')
//const util = require('util')
//const readFilePromise = util.promisify(readFile)
//const writeFilePromise = util.promisify(writeFile)




async function start() {
    try {
        const first = await readFile('./first.txt', 'utf8')
        const second = await readFile('./second.txt', 'utf8')
        await writeFile('./fourth.txt', ` ${first} ${second}`, {flag: "a"})
    } catch(error) {
        console.log(error);
    }
}


start()

/*
function getText(path) {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if(err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    }) 
}
*/

/*
getText('./first.txt')
    .then(result => console.log(result))
    .catch(err => console.log(err))*/