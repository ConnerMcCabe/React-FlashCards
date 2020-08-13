import React from 'react';

function Flashcard({flashcard}) {
    
    return (
        <div className="Flashcard">
            {flashcard.question}
        </div>
    )
};

export default Flashcard;