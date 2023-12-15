import axios from 'axios';

const ncNewsApi = axios.create({
  baseURL: 'https://nc-news-server-o3yf.onrender.com',
});

export const deleteComment = (comment_id) => {
  return ncNewsApi.delete(`/api/comments/${comment_id}`);
};
