import  { useState, useEffect } from "react";
import { postComment } from "../Utils/postApi";
import { getCommentsByArticleId } from "../Utils/getApi";
import { useParams } from "react-router-dom";
import Error from "./Error";

const CommentAdder = () => {
    const {article_id} = useParams()
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [addComments, setAddComments] = useState("");
    const [error, setError] = useState(null);
    const [isPosting, setIsPosting] = useState(false);

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
                    setComments([commentPosted, ...comments]);
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

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h3>Add Your Comments👇</h3>
            <textarea className="comment-box"
                value={addComments}
                onChange={(event) => setAddComments(event.target.value)}
                placeholder="Write your comments here..."
            />
            {addComments.length > 100 ? (
    <Error message='Your comment is too long!' />
    ) : (
    <p>{`${100 - addComments.length} characters remaining`}</p>
    )}

    <button className="post-comment-button"
        onClick={handleSubmit}
        disabled={isPosting || addComments.length > 100}>
        {isPosting ? "Posting..." : "Post Comment"}
    </button>

            {error && <p className="errormsg">{error}</p>}
           
        </div>
    );
};

export default CommentAdder;