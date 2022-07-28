import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getEvents(perPage,page)
    {
        return apiClient.get('/todos?_limit=' + perPage + '&_page=' + page)
    },
    getEvent(id)
    {
        return apiClient.get('/todos/' +id)
    }
}