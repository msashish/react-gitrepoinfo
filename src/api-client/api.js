import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.github.com/'
})

export default {
    getRepoList: (repo) =>
        instance({
            'method':'GET',
            'url': `/users/${repo}/repos`
        }),
    getRepoEvents: (repo) =>
        instance({
            'method':'GET',
            'url': `/users/${repo}/events`
        })
}