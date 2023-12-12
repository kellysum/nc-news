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

export const getArticlesById =(article_id)=>{
    return ncNewsApi
    .get(`/api/articles/${article_id}`)
    .then(({data})=>{
        return data.articles
    })
}

export const getCommentsByArticleId =(article_id)=>{
    return ncNewsApi
    .get(`/api/articles/${article_id}/comments`)
    .then(({data})=>{
        return data.comments
})
}