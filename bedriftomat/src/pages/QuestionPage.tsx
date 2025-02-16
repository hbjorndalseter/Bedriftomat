import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Question, SelectedAnswer } from "../types";
import QuestionBox from "../components/QuestionBox";
import AnswerButton from "../components/AnswerButton";
import NextButton from "../components/NextButton";
import ProgressBar from "../components/ProgressBar";

const QuestionPage: React.FC = () => {

  const navigate = useNavigate();

  const [quizData, setQuizData] = useState<Question[] | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [scores, setScores] = useState<number[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<SelectedAnswer | null>(null);
  const [progressBarLength, setProgressBarLength] = useState<number>(0);

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

    setScores((prevScores) => {
      const updatedScores = [...prevScores];
      selectedAnswer.rewardedCompanies.forEach((companyId) => {
        updatedScores[companyId] += 1;
      });
      return updatedScores;
    });

    setSelectedAnswer(null);

    if (quizData && currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex((prevIndex) => {
        const newIndex = prevIndex + 1;
        setProgressBarLength(newIndex / quizData.length);
        return newIndex;
      });
    } else {
      setProgressBarLength(1);
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    setTimeout(() => {
      navigate("/result", { state: { scores } });
    }, 300); // 1 second delay before navigating to the result page
  };

  if (!quizData || quizData.length === 0) {
    return <p>Laster...</p>; //Ensures no rendering before data is ready
  }

  const currentQuestion = quizData[currentQuestionIndex];

  return (
    <div className="flex flex-col items-center h-80/100 justify-around max-[375px]:">
      <ProgressBar progress={progressBarLength} />
      <QuestionBox text={currentQuestion.question} />
      <div className="flex flex-col h-2/3 justify-between">
        {currentQuestion.answers.map((answer) => (
          <AnswerButton
            key={answer.id}
            text={answer.text}
            onClick={() => handleAnswerSelect(answer.id, answer.rewarded_companies)}
            isSelected={selectedAnswer?.answerId === answer.id}
          />
        ))}
      </div>

      <NextButton onClick={handleNext} disabled={selectedAnswer === null} lastQuestion={currentQuestionIndex == (quizData.length - 1)} />
    </div>
  );
};

export default QuestionPage;