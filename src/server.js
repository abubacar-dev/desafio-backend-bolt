import http from 'node:http';

const host = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    return res.end('Hello, World...!')
})

server.listen(port, host, () => {
    console.log(`server is running on http://${host}:${port}`);
})