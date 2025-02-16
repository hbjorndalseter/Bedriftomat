import { QuestionProps } from '../types';

const QuestionBox: React.FC<QuestionProps> = ({ text })=> {
  return (
    <div className="min-h-[56px] text-lg font-bold text-center text-white flex items-center" style={{ maxWidth: '330px' }}>
      {text}
    </div>
  );
}

export default QuestionBox;