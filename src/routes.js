export const routes = [
    {
        method: 'GET',
        path: '/user/:name',
        handler: (req, res) => {
            return res
                .setHeader('Content-Type', 'application/json')
                .end('hello, world...!')
        }
    }
]