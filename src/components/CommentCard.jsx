const CommentCard = ({ comment }) => {
    return (
        <div className="comment-card">
            <p className="comment-body">{comment.body}</p>
            <p>Username: {comment.author}</p>
            <p>Created at:{comment.created_at}</p>
            
        </div>
    );
};

export default CommentCard;
