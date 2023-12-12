import React from "react";
import { Link } from 'react-router-dom';

const ArticleCard = ({ article }) => {
    return (
        <p className="article-card">
            <Link to={`/articles/${article.article_id}`}>
                {article.title}
            </Link>
            <p>Author: {article.author}</p>
            <p>Topic: {article.topic}</p>
        </p>
    );
};

export default ArticleCard;
