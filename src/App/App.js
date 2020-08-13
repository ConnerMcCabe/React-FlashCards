import React, {useState} from 'react';
import './App.css';
import FlashcardList from '../Component/FlashcardList';

function App() {
  const [flashcards, setFlashcards] = useState(sampleInfo)
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