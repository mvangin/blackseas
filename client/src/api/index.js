import axios from 'axios';


const api = axios.create({
   // baseURL: 'https://conflict-continuum-api.herokuapp.com'
    baseURL: 'http://localhost:9001'
})

export const contactPost = payload => api.post(`/contactPost`, payload)


const apis = {
    contactPost,
}

export default apis