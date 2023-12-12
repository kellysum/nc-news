import React, { useState } from 'react';

const Vote = ({ initialVotes }) => {
    const [votes, setVotes] = useState(initialVotes);
    const [voted, setVoted] = useState(false); 
    

    const handleVote = () => {
        if (!voted) {
    
            setVotes(votes + 1);
            setVoted(true);
        } else {
            
            setVotes(votes - 1);
            setVoted(false);
        }
    };

    return (
        <div>
            <p className='voteCount'>Votes: {votes}</p>
            <button className='voteButton'onClick={handleVote}>{voted ? 'Undo Vote' : '👍'}</button>
        </div>
    );
};

export default Vote;

