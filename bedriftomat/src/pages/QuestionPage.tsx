import { useEffect, useState } from "react";
import { Question } from "../types";
import QuestionBox from "../components/QuestionBox";

const QuestionPage: React.FC = () => {
  const [allData, setAllData] = useState<Question | null>(null);
  const [question, setQuestion] = useState<>(null);
  const [currentAnswer, setCurrentAnswer] = useState<>(true);
  let questionIndex = 0;


  useEffect(() => {
    fetchRandomQuestions();
    updateQuestion();
  }, []);

const fetchRandomQuestions = async () => {
    const response = await fetch('http://localhost:3000/numCompanies');
    const data = await response.json();
  setAllData(data);
};

const updateQuestion = () => {
    setQuestion(question.question[questionIndex])
    if (questionIndex < 6){
        questionIndex++; 
    }
};

  return (
    {question && <QuestionBox text={question}></QuestionBox>}
    );
}

export default QuestionPage;