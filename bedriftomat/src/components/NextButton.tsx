import { NextButtonProps } from "../types";

const NextButton: React.FC<NextButtonProps> = ({ onClick, disabled, lastQuestion }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-[335px] h-[72px] rounded-[36px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] text-white transition-colors duration-300 ${
      disabled ? "bg-[#d9d9d9]" : "bg-[#2d3b87]"
      }`}
    >
      {lastQuestion ? "Se resultat" : "Neste"}
    </button>
  );
};

export default NextButton;