import React from "react";
import { AnswerButtonProps } from "../types";

const AnswerButton: React.FC<AnswerButtonProps> = ({ text, onClick, isSelected = false, isPrimary = false }) => {
  return (
    <div className="answer-button-container">
      <button className="answer-button" onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default AnswerButton;