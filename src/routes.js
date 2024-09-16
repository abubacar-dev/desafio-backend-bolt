import { GetApi } from "./controllers/getgithubapi.js"
import { buildRoutePath } from "./utils/buildrouteparh.js"

const getApi = new GetApi()

export const routes = [
    {
        method: 'GET',
        path: buildRoutePath('/user/:name'),
        handler: async (req, res) => {
            const { name } = req.param

            const repos = await getApi.getGitHubApi(name)

            return res
                .setHeader('Content-Type', 'application/json')
                .end(JSON.stringify(repos))
        }
    }
]