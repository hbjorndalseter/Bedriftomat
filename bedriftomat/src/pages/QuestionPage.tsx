import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Question, SelectedAnswer } from "../types";
import QuestionBox from "../components/QuestionBox";
import AnswerButton from "../components/AnswerButton";
import NextButton from "../components/NextButton";

const QuestionPage: React.FC = () => {

  const navigate = useNavigate();

  const [quizData, setQuizData] = useState<Question[] | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [scores, setScores] = useState<number[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<SelectedAnswer | null>(null);

  useEffect(() => {
    initializeScores();
    initializeQuestions();
  }, []);

  const initializeScores = async () => {
    try {
      const response = await fetch("http://localhost:3000/numCompanies");
      const data = await response.json();
      setScores(new Array(data.count).fill(0));
    } catch (error) {
      console.error("Error fetching number of companies:", error);
    }
  }

  const initializeQuestions = async () => {
    try {
      const response = await fetch("http://localhost:3000/randomQuestions");
      const data = await response.json();
      setQuizData(data.questions);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  const handleAnswerSelect = (answerId: number, rewardedCompanies: number[]) => {
    setSelectedAnswer({ answerId, rewardedCompanies });
  };

  const handleNext = () => {
    if (!selectedAnswer) return; //Prevent skipping without answering

    setScores((prevScores) => { //Denne funksjonen var chat bestemt på at skulle skje på denne måten for å unngå bugs.
      const updatedScores = [...prevScores];

      selectedAnswer.rewardedCompanies.forEach((companyId) => {
        updatedScores[companyId] += 1;
      });

      return updatedScores;
    });

    setSelectedAnswer(null);

    if (quizData && currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    navigate("/result", { state: {scores}});
  };

  if (!quizData || quizData.length === 0) {
    return <p>Loading...</p>; //Ensures no rendering before data is ready
  }

  const currentQuestion = quizData[currentQuestionIndex];

  return (
    <div>
      <QuestionBox text={currentQuestion.question} />

      {currentQuestion.answers.map((answer) => (
        <AnswerButton
          key={answer.id}
          text={answer.text}
          onClick={() => handleAnswerSelect(answer.id, answer.rewarded_companies)}
          isSelected={selectedAnswer?.answerId === answer.id}
        />
      ))}

      <NextButton onClick={handleNext} disabled={selectedAnswer === null} lastQuestion={currentQuestionIndex == (quizData.length - 1)} />
    </div>
  );
};

export default QuestionPage;