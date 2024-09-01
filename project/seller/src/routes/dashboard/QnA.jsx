import React from 'react';
import './qna.css';

// Dummy data
const questions = [
  { id: 1, question: 'How can I return a product?', answer: '' },
  { id: 2, question: 'What is the warranty period?', answer: '' },
  // More data...
];

function QnA() {
  return (
    <div>
      <h2>Q&A</h2>
      {questions.map((qna) => (
        <div key={qna.id}>
          <p><strong>Q:</strong> {qna.question}</p>
          <p><strong>A:</strong> {qna.answer}</p>
          <textarea placeholder="Write your answer here..." />
          <button>Submit</button>
        </div>
      ))}
    </div>
  );
}

export default QnA;
