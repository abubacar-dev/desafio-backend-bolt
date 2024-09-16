import http from 'node:http';
import { routes } from './routes.js';

const host = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    const { method, url } = req

    const route = routes.find(route => {
        return route.method === method && route.path.test(url)
    })

    if(route) {
        const routeParams = req.url.match(route.path)
        req.param = { ...routeParams.groups }
        
        return route.handler(req, res)
    }

    return res
        .writeHead(404)
        .end(JSON.stringify({
            error: 'Resource Not Found...'
        }))
})

server.listen(port, host, () => {
    console.log(`server is running on http://${host}:${port}`);
})