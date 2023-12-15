import React from "react";
import { Link } from 'react-router-dom';

const ArticleCard = ({ article }) => {
    return (
        <div className="article-card">
            <Link to={`/articles/${article.article_id}`}>
                {article.title}
            </Link>
            <p>Author: {article.author}</p>
            <p>Topic: {article.topic}</p>
            <p>Date: {article.created_at}</p>
            <p>Comments: {article.comment_count}</p>
            <p>Votes: {article.votes}</p>
        </div>
    );
};

export default ArticleCard;
