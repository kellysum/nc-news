import axios from 'axios'

const ncNewsApi = axios.create({
    baseURL: 'https://nc-news-server-o3yf.onrender.com',
})


export const updateArticleVotes = (article_id, inc_votes) => {
    return ncNewsApi
    .patch(`/api/articles/${article_id}`, { inc_votes: inc_votes })
        .then(response => {
           
        })
        .catch(error => {
            
            console.error("Error updating article votes:", error);
            throw error; 
        });
};