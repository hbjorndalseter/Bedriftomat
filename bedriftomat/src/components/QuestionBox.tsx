import React, { useEffect, useState } from 'react';

interface Question {
  id: number;
  question: string;
}

const QuestionBox: React.FC = () => {
  const [question, setQuestion] = useState<Question | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchRandomQuestion = async () => {
      const response = await fetch('randomQuestion');
      const data = await response.json();
      setQuestion(data);
      setLoading(false);
    };
    /*
    const fetchRandomQuestion = async () => {
      const mockData: Question = {
        id: 1,
        question: "Hvor glad er du i programmering?",
      };

      setTimeout(() => {
        setQuestion(mockData);
        setLoading(false);
      }, 1000);
    };
    */

    fetchRandomQuestion();
  }, []);

  if (loading) {
    return <p style={{ color: 'white', fontFamily: 'Arial, sans-serif', fontSize: '24px' }}>Loading...</p>;
  }

  if (!question) {
    return <p>No question found.</p>;
  }

  return (
    <p style={{ color: 'white', fontFamily: 'Arial, sans-serif', fontSize: '24px' }}>
      {question.question}
    </p>
  );
}

export default QuestionBox;