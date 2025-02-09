import { NextButtonProps } from "../types";

  
  const NextButton: React.FC<NextButtonProps> = ({ onClick, disabled }) => {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: disabled ? "#ccc" : "#28a745",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: disabled ? "not-allowed" : "pointer",
          fontSize: "18px",
        }}
      >
        Next
      </button>
    );
  };
  
  export default NextButton;