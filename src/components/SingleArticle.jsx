import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getArticlesById } from '../Utils/getApi';
import Vote from './Vote'

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
            <Vote article_id={singleArticle.article_id}
            initialVotes={singleArticle.votes} />
            <img src={singleArticle.article_img_url}  alt='Illustration related to the article topic' width='400px' height='250px' border='5px'/>
            <p className='individualArticleBody'>{singleArticle.body}</p>
            <p className='individualArticleAuthor'>Author: {singleArticle.author}</p>
            <p className='individualArticleAuthor'>Topic: {singleArticle.topic}</p>

        </div>
    );
};

export default SingleArticle;
