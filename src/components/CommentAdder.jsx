import  { useState, useEffect } from "react";
import { postComment } from "../Utils/postApi";
import { getCommentsByArticleId } from "../Utils/getApi";
import { useParams } from "react-router-dom";
import CommentList from "./CommentList";
import CommentCard from "./CommentCard";

const CommentAdder = () => {
    const { article_id } = useParams();
    const [comments, setComments] = useState([]);
    const [addComments, setAddComments] = useState("");
    const [error, setError] = useState(null);
    const [isPosting, setIsPosting] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    
    useEffect(() => {
        setIsLoading(true);
        getCommentsByArticleId(article_id)
            .then((data) => {
                setComments(data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Error getting comments:", error);
                setIsLoading(false);
            });
    }, [article_id]);

    const handleSubmit = () => {
    if (addComments.trim() !== "") {
        const userName = "grumpy19";
        const commentWithDefaultName = {
            username: userName,
            comment: addComments,
        };

        setIsPosting(true);
        postComment(article_id, commentWithDefaultName)
            .then((commentPosted) => {
                setComments((prevComments) => [commentPosted, ...prevComments]);
                setIsPosting(false);
                setAddComments("");
            })
            .catch((error) => {
                console.error("Error posting comment:", error);
                setIsPosting(false);
                setError("Failed to post comment. Please try again.");
            });
    } else {
        setError("Please fill out all fields!");
    }
};

    return (
        <div>
            <h3>Add Your Comments👇</h3>
            <textarea
                value={addComments}
                onChange={(event) => setAddComments(event.target.value)}
                placeholder="Write your comments here..."
            ></textarea>
            <button onClick={handleSubmit} disabled={isPosting}>
                {isPosting ? "Posting..." : "Post Comment"}
            </button>
            {error && <p className="errormsg">{error}</p>}
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    {comments.map((comment, index) => (
                        <div key={index}>
                            <p>{comment.username}: {comment.comment}</p> </div>
                       
                    ))}
                </div>
            )}
        </div>
    );
};

export default CommentAdder;
