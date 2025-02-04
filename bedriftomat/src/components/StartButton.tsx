import { Link, Navigate, useNavigate } from "react-router-dom";
//import QuestionPage from './pages/QuestionPage.tsx';

export default function StartButton() {
    const navigate = useNavigate();

    return (
        <button
        onClick={() => navigate("./pages/QuestionPage.tsx")}
        className="w-[168px] h-[71px] text-center text-white text-2xl font-normal font-['Istok Web']"
        > 
            START
        </button>
    );
}
