const repos = []

export class GetApi {
    async getGitHubApi(name) {
        const response = await fetch(`https://api.github.com/users/${name}/repos`)
        const data = await response.json()

        data.map(repo => {
            repos.push({
                name: repo.name,
                stars: repo.stargazers_count,
                forks: repo.forks,
            })
        })

        return repos
    }
}

async function log() {
    const getApi = new GetApi()

    console.log(await getApi.getGitHubApi('boltjz'));
    
}

log()