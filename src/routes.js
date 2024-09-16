export const routes = [
    {
        method: 'GET',
        path: '/user',
        handler: (req, res) => {
            return res
                .setHeader('Content-Type', 'application/json')
                .end('hello, world...!')
        }
    }
]