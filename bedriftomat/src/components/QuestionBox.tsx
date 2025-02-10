import { QuestionProps } from '../types';

const QuestionBox: React.FC<QuestionProps> = ({ text })=> {
  return (
    <p className="mb-4 text-lg font-bold text-center text-white">
      {text}
    </p>
  );
}

export default QuestionBox;