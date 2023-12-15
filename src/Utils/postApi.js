import axios from 'axios'

const ncNewsApi = axios.create({
    baseURL: 'https://nc-news-server-o3yf.onrender.com',
})

export const postComment =(article_id, addComments)=>{
   return ncNewsApi
   .post(`/api/articles/${article_id}/comments`, addComments)
        .then(response => {
            return response.data.comments;
        })
        .catch(error => {
            console.error("Error posting comment:", error);
            throw error;
        });
};