import { useState } from 'react';
import { updateArticleVotes } from '../Utils/patchApi';

const Vote = ({ article_id, initialVotes }) => {
  const [votes, setVotes] = useState(initialVotes);
  const [voteError, setVoteError] = useState(null);

  const handleVote = (voteType) => {
    let inc_votes;

    if (voteType === 'upvote') {
      inc_votes = 1;
    } else if (voteType === 'downvote') {
      inc_votes = -1;
    }

    
    setVotes(votes + inc_votes);

    updateArticleVotes(article_id, inc_votes)
      .then(() => {
        
        setVotes(votes + inc_votes);
        setVoteError(null); 
      })
      .catch((error) => {
       
        setVotes(votes);
        setVoteError('Failed to update votes. Please try again.'); 
        console.error('Error updating votes:', error);
      });
  };

  return (
    <div className="vote-count">
      <p>Votes: {votes}</p>
      {voteError && <p className="error-message">{voteError}</p>}
      <button onClick={() => handleVote('upvote')}>Vote👍</button>
      <button onClick={() => handleVote('downvote')}>Downvote👎</button>
    </div>
  );
};

export default Vote;

