export class GetApi {
    async getGitHubApi(name, page, per_page) {
        
        try {
            const response = await fetch(`https://api.github.com/users/${name}/repos?per_page=${per_page}&page=${page}`)
        
            const data = await response.json()

            if(response.ok) {
                return data
            }
        } catch (error) {
            console.log('Fetch ERROR:', error);
        }
    }
}