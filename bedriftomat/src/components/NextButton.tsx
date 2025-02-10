import { NextButtonProps } from "../types";

const NextButton: React.FC<NextButtonProps> = ({ onClick, disabled, lastQuestion }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="w-[335px] h-[72px] bg-[#2d3b87] rounded-[36px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] text-white"
    >
      {lastQuestion ? "Se resultat" : "Neste"}
    </button>
  );
};

export default NextButton;