import http from 'node:http';
import { routes } from './routes.js';
import { extractQueryParams } from './utils/extractqueryparams.js';

const host = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    const { method, url } = req

    const route = routes.find(route => {
        return route.method === method && route.path.test(url)
    })

    if(route) {
        const routeParams = req.url.match(route.path)
        const { query, ...params } = routeParams.groups
        
        req.param = params
        req.query = query ? extractQueryParams(query) : {}
        
        return route.handler(req, res)
    }

    return res
        .writeHead(404)
        .end(JSON.stringify({
            message: 'Resource Not Found...',
            status: 404
        }))
})

server.listen(port, host, () => {
    console.log(`server is running on http://${host}:${port}`);
})