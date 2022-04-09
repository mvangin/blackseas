import axios from 'axios';


const isDev = window.location.host.indexOf('localhost:') > -1


const api = axios.create({
    baseURL: isDev ? 'http://localhost:9001' : 'https://blackseasconsultancy.herokuapp.com/'
})

export const contactPost = payload => api.post(`/contactPost`, payload)


const apis = {
    contactPost,
}

export default apis