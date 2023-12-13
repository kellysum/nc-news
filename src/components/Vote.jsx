import { useState } from 'react';
import { updateArticleVotes } from '../Utils/patchApi';

const Vote = ({ article_id, initialVotes }) => {
  const [votes, setVotes] = useState(initialVotes);
  const [voteError, setVoteError] = useState(null);
  const [hasVoted, setHasVoted] = useState(false);

  const handleVote = () => {
    let inc_votes;

    if (hasVoted) {
      inc_votes = -1;
    } else {
      inc_votes = 1; 
    }

    
    setVotes(votes + inc_votes);
    setHasVoted(!hasVoted); 

    updateArticleVotes(article_id, inc_votes)
      .then(() => {
        
        setVoteError(null); 
      })
      .catch((error) => {
       
        setVotes(votes - inc_votes);
        setHasVoted(!hasVoted); 
        setVoteError('Failed to update votes. Please try again.');
        console.error('Error updating votes:', error);
      });
  };

  return (
    <div className="vote-count">
      <p>Votes: {votes}</p>
      {voteError && <p className="error-message">{voteError}</p>}
      <button onClick={handleVote}>{hasVoted ? 'Undo👎' : '👍'}</button>
    </div>
  );
};

export default Vote;
