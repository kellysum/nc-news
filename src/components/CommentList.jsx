import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CommentCard from './CommentCard';
import { getCommentsByArticleId } from '../Utils/getApi';
import FancyBox from './FancyBox';

const CommentList = () => {
    const { article_id } = useParams()
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getCommentsByArticleId(article_id).then((commentsData) => {
            setComments(commentsData);
            setLoading(false);
        });
    }, [article_id]);

    if (loading) {
        return <div>Loading comments...</div>;
    }

    return (
        <div>
            <p className='comment-title'>Comments</p>
            <ul className="comment-list">
                {comments.map((comment) => (
                    <FancyBox>
                    <CommentCard  comment={comment} key={comment.comment_id}/>
                    </FancyBox>
                ))}
            </ul>
        </div>
    );
};

export default CommentList;
