import axios from 'axios'

const ncNewsApi = axios.create({
    baseURL: 'https://nc-news-server-o3yf.onrender.com',
})

export const getArticles = () =>{
    return ncNewsApi
    .get('/api/articles')
    .then(({data})=>{
        return data.articles
    })
}