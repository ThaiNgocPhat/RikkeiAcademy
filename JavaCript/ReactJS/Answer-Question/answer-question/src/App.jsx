// App.js
import React, { useState } from 'react';
import Answer from './Answer';

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);

  const handleAnswerSubmit = (question, answer) => {
    setQuestions([...questions, question]);
    setAnswers([...answers, answer]);
  };

  return (
    <div>
      <Answer handleAnswerSubmit={handleAnswerSubmit} />
      <div>
        <h2>Câu hỏi:</h2>
        <ul>
          {questions.map((question, index) => (
            <li key={index}>{question}</li>
          ))}
        </ul>
        <h2>Câu trả lời:</h2>
        <ul>
          {answers.map((answer, index) => (
            <li key={index}>{answer}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
