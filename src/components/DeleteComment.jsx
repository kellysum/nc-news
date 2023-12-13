import { useState } from 'react';
import { deleteComment } from '../Utils/deleteApi';

const DeleteComment = ({ comment_id, commentAuthor, onDelete }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteSuccess, setDeleteSuccess] = useState(false);

  
  const testingUser = {
    username: 'testUser', 
  };

  const canDelete = testingUser && testingUser.username === commentAuthor;

  const handleDelete = () => {
    setIsDeleting(true);

    deleteComment(comment_id)
      .then(() => {
        setIsDeleting(false);
        setDeleteSuccess(true);
        onDelete(commentId);
        setTimeout(() => {
          setDeleteSuccess(false);
        }, 3000); 
      })
      .catch((error) => {
        setIsDeleting(false);
        console.error('Error deleting comment:', error);
      });
  };

  return (
    <div>
      {canDelete && (
        <>
          {isDeleting ? (
            <p>Deleting...</p>
          ) : (
            <button onClick={handleDelete}>Delete</button>
          )}
          {deleteSuccess && <p>Comment deleted successfully!</p>}
        </>
      )}
    </div>
  );
};

export default DeleteComment;
