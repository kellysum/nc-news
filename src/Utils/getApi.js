import axios from 'axios'

const ncNewsApi = axios.create({
    baseURL: 'https://nc-news-server-o3yf.onrender.com',
});

export const getArticles = () => {
    return ncNewsApi
        .get('/api/articles')
        .then(({ data }) => {
            return data.articles;
        })
        .catch((error) => {
            
            console.error('Error fetching articles:', error);
            throw error; 
        });
};

export const getArticleById = (article_id) => {
    return ncNewsApi
        .get(`/api/articles/${article_id}`)
        .then(({ data }) => {
             return data.articles;
      
        })
        .catch((error) => {
            console.error(`Error fetching article with ID ${article_id}:`, error);
            throw error;
        });
};

export const getCommentsByArticleId = (article_id) => {
    return ncNewsApi
        .get(`/api/articles/${article_id}/comments`)
        .then(({ data }) => {
            return data.comments;
        })
        .catch((error) => {
            console.error(`Error fetching comments for article ID ${article_id}:`, error);
            throw error;
        });
};

export const getTopics = () => {
    return ncNewsApi
        .get('/api/topics')
        .then(({ data }) => {
            return data.topics;
        })
        .catch((error) => {
            console.error('Error fetching topics:', error);
            throw error;
        });
};
