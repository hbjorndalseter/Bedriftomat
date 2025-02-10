import { QuestionProps } from '../types';

const QuestionBox: React.FC<QuestionProps> = ({ text })=> {
  return (
    <p className="question-box-text">
      {text}
    </p>
  );
}

export default QuestionBox;