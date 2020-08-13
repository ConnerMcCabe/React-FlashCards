import React, { useState } from 'react';
import './Flashcard.css'

function Flashcard({ flashcard }) {
    const [flip, setFlip] = useState(false)

    return (
        <div className={`card ${flip ? 'flip' : ""}`} onClick={() => setFlip(!flip)}>
            <div className="front">
                {flashcard.question}
                <div className="flashcardOptions">
                    {flashcard.options.map(option => {
                        return <div className="flashcardOption">{option}</div>
                    })}
                </div>
            </div>
                <div className="back">{flashcard.answer}</div>
        </div>
    )
};

export default Flashcard;