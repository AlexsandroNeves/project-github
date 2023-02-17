export interface Users {
    name: string,
    login: string,
    location: string,
    email: string,
    avatar_url: string,
    html_url: string
    public_repos: string
}

export interface Searchs {
    loadUser: (userName: string) => Promise<void>
}