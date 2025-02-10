import { NextButtonProps } from "../types";

const NextButton: React.FC<NextButtonProps> = ({ onClick, disabled, lastQuestion }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="next-button"
    >
      {lastQuestion ? "Finish" : "Next"}
    </button>
  );
};

export default NextButton;