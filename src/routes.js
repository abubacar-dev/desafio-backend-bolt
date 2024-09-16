import { buildRoutePath } from "./utils/buildrouteparh.js"

export const routes = [
    {
        method: 'GET',
        path: buildRoutePath('/user/:name'),
        handler: (req, res) => {
            return res
                .setHeader('Content-Type', 'application/json')
                .end('hello, world...!')
        }
    }
]