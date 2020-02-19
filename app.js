//Libreria http de Node.js
const http = require('http');

//Host: loopback address
const hostname = '127.0.0.1';

//Node.js default port
const port = 3000;

//ECMAScript 6 Function
const f2 = () => {

}

//EMAScript 6 anonymus Function
() => {}

//convencion 
//req => Request  
//res => Result
const server = http.createServer((req, res) => {
    //ok
    res.statusCode = 200;
    //Set content mimetype for plain text
    res.setHeader('Content-Type', 'text-plain');

    res.end('Hello World!');
});

server.listen(port, hostname, () =>{
    console.log(`Server running at http://${hostname}:${port}`);

});