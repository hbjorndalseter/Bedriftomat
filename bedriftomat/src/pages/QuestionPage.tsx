import { useEffect, useState } from "react";
import { QuizData, SelectedAnswer } from "../types";
import QuestionBox from "../components/QuestionBox";
import Button from "../components/Button";

const QuestionPage: React.FC = () => {
  const [quizData, setQuizData] = useState<QuizData | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [scores, setScores] = useState<number[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<SelectedAnswer | null>(null);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await fetch("http://localhost:3000/numCompanies");
      const data: QuizData = await response.json();

      setScores(new Array(data.companies.length).fill(0));
      setQuizData(data);
      setCurrentQuestionIndex(0);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  const handleAnswerSelect = (rewardedCompanies: number[], answerId: number) => {
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

    if (quizData && currentQuestionIndex < quizData.questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = async () => {
    //for litt debugging
    console.log("Final Scores:", scores);

    try {
      await fetch("http://localhost:3000/submitScores", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(scores),
      });
      console.log("Scores sent to backend");
    } catch (error) {
      console.error("Error sending scores:", error);
    }
  };

  if (!quizData || quizData.questions.length === 0) {
    return <p>Loading...</p>; //Ensures no rendering before data is ready
  }

  const currentQuestion = quizData.questions[currentQuestionIndex];

  return (
    <div>
      <QuestionBox text={currentQuestion.question} />

      {currentQuestion.answers.map((answer) => (
        <Button
          key={answer.id}
          text={answer.text}
          onClick={() => handleAnswerSelect(answer.rewarded_companies, answer.id)}
          isSelected={selectedAnswer?.answerId === answer.id} //Compare with selectedAnswer.answerId
        />
      ))}

      <NextButton onClick={handleNext} disabled={selectedAnswer === null} />
    </div>
  );
};

export default QuestionPage;