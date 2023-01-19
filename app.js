const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === "/") {
        res.end("Welcome to our main page")
    }
    else if(req.url === "/about") {
        res.end("So our history includes helping green people and building multiple railroads")
    } else {
    res.end(`<h1>Ooooops</h1>
    <p>I guess we've shitted out pants a little bit</p>
    <a href="/">Back Home</a>
    `)}
})

server.listen(5000)

