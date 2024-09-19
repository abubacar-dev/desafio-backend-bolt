import { GetApi } from "./controllers/getgithubapi.js"
import { buildRoutePath } from "./utils/buildrouteparh.js"

const getApi = new GetApi()

let pagination;

export const routes = [
    {
        method: 'GET',
        path: buildRoutePath('/user/:name'),
        handler: async (req, res) => {
            const { name } = req.param
            const { page = 1 } = req.query
            const per_page = 5;

            const repos = await getApi.getGitHubApi(name, page, per_page)

            if(repos.length !== 0) {
                pagination = {
                    path: req.url,
                    page,
                    prev: Number(page) - Number(1) >= Number(1) ? Number(page) - Number(1) : null,
                    next: Number(page) + Number(1) > Number(page) ? Number(page) + Number(1) : null,
                    per_page
                }
            }

            return res
                .setHeader('Content-Type', 'application/json')
                .end(JSON.stringify({
                    repos,
                    pagination
                }))
        }
    }
]