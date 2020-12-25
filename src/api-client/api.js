import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.github.com/'
})

export default {
    getRepoList: () =>
        instance({
            'method':'GET',
            'url': '/users/msashish/repos'
        }),
    getRepoEvents: () =>
        instance({
            'method':'GET',
            'url': '/users/msashish/events'
        })
}