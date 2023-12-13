import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postComment } from "../Utils/postApi";
import { useParams } from 'react-router-dom';

const CommentAdder = () => {
    const { article_id } = useParams();
    const navigate = useNavigate();
    const [addComments, setNewComment] = useState({
        comment: "",
        username: "testUser",
    });
    const [isPosting, setIsPosting] = useState(false);
    const [comments, setComments] = useState([]); 

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewComment({
            ...addComments,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!addComments.comment) {
            alert("Please fill out all fields!");
            return;
        }

        setIsPosting(true);

        postComment(article_id, addComments)
            .then((newCommentList) => {
                setNewComment({ 
                    comment: "",
                    username: "testUser", 
                });
                setComments([newCommentList, ...comments]);
                setIsPosting(false);
                alert("Comment posted successfully!");
                navigate(`/articles/${article_id}`);
            })
            .catch((error) => {
                setIsPosting(false);
                alert("Failed to post comment. Please try again.");
                console.error("Error posting comment:", error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="username"
                value={addComments.username}
                onChange={handleInputChange}
                placeholder="Your Username"
                required
            />
            <textarea
                name="comment"
                value={addComments.comment}
                onChange={handleInputChange}
                placeholder="Write your comment here..."
                required
            />
            <button type="submit" disabled={isPosting}>
                {isPosting ? "Posting..." : "Post Comment"}
            </button>
        </form>
    );
};

export default CommentAdder;
