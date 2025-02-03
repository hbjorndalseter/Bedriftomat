import React from 'react'
interface QuestionProps {
  question: string;
}

const Question: React.FC<QuestionProps> = ({ question }) => {
  return (
    <div id='question-box'>
      <h2>{question}</h2>
    </div>
  )
}

export default Question;