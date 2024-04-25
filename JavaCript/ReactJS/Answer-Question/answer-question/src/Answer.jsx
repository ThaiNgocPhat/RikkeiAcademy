// Answer.js
import React, { useState } from 'react';

const Answer = ({ handleAnswerSubmit }) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAnswerSubmit(question, answer);
    setQuestion('');
    setAnswer('');
  };

  return (
    <div>
      <h2>Nhập câu hỏi và câu trả lời</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Câu hỏi:
          <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} />
        </label>
        <br />
        <label>
          Câu trả lời:
          <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Answer;
