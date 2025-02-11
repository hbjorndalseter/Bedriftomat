import React from "react";
import { AnswerButtonProps } from "../types";

const AnswerButton: React.FC<AnswerButtonProps> = ({ text, onClick, isSelected = false, isPrimary = false }) => {
  return (
    <div>
      <button
        className="flex justify-center items-center w-[335px] h-[18vw] max-h-[81px] bg-[#d9d9d9] rounded-[10px] cursor-pointer shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)"
        onClick={onClick}
        style={{ backgroundColor: isSelected ? "#f26321" : "#d9d9d9", color: isSelected ? "white" : "black", transition: "background-color 0.3s" }}
      >
        <p className="w-9/10">{text}</p>
      </button>
    </div>
  );
};

export default AnswerButton;