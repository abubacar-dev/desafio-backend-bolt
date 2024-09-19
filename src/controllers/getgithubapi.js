export class GetApi {
    async getGitHubApi(name, page, per_page) {
        
        try {
            const response = await fetch(`https://api.github.com/users/${name}/repos?per_page=${per_page}&page=${page}`)
        
            const data = await response.json()
            
            const repos = []
            
            if(response.ok) {
                data.map(repo => {
                    repos.push({
                        name: repo.name,
                        stars: repo.stargazers_count,
                        forks: repo.forks,
                    })
                })

                return repos
            }else {
                console.log('Server ERROR:', data.error.mensage);
            }

        } catch (error) {
            console.log('Fetch ERROR:', error);
        }
    }
}