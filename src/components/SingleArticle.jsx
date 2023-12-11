import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getArticlesById } from '../Utils/getApi';

const SingleArticle = () => {
    const { article_id } = useParams();
    const [singleArticle, setSingleArticle] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getArticlesById(article_id).then((data) => {
            setSingleArticle(data);
            setLoading(false)
        });
    }, [article_id]);

    if(loading){
        return <div>Loading...</div>
    }


    return (
        <div>
            <h2>{singleArticle.title}</h2>
            <p>{singleArticle.body}</p>
            <p>Author: {singleArticle.author}</p>
        </div>
    );
};

export default SingleArticle;
