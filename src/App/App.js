import React, { useState, useEffect } from 'react';
import './App.css';
import FlashcardList from '../Component/FlashcardList';
import axios from "axios"

function App() {

  const [flashcards, setFlashcards] = useState(sampleInfo)

  useEffect(() => {
    axios
      .get('https://opentdb.com/api.php?amount=10')
      .then(res => {
        setFlashcards(res.data.results.map((questionItem, index) => {
          const answer = questionItem.correct_answer
          const options = [...questionItem.incorrect_answers, answer]
          return {
            id: `${index}-${Date.now()}`,
            question: questionItem.question,
            answer: answer,
            options: options.sort(() => Math.random() - .5)
          }
        }))
      })
  }, [])

  return (
    <div>
      <FlashcardList flashcards={flashcards} />
    </div>
  )
};


const sampleInfo = [
  {
      id: 1,
      question: 'what is 2 + 2',
      answer: '4',
      options: [
          '1',
          '3',
          '7',
          '4'
      ]
  }, {
      id: 2,
      question: 'Question 2',
      answer: 'answer',
      options: [
          'wrong',
          'right',
          'wrong',
          'wrong'
      ]
  }
]


export default App