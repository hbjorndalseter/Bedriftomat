interface ButtonProps {
    text: string;
    onClick: () => void;
    isSelected?: boolean;
    isPrimary?: boolean;
  }
  
  const Button: React.FC<ButtonProps> = ({ text, onClick, isSelected = false, isPrimary = false }) => {
    return (
      <button
        onClick={onClick}
        style={{
          display: "block",
          margin: "10px 0",
          padding: "10px",
          backgroundColor: isPrimary ? "#28a745" : isSelected ? "#ffcc00" : "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "18px",
        }}
      >
        {text}
      </button>
    );
  };
  
  export default Button;