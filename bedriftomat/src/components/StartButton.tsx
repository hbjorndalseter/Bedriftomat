import { Link} from "react-router-dom";
//import QuestionPage from './pages/QuestionPage.tsx';

export default function StartButton() {
    return (
        <button className="w-[168px] h-[71px] text-center text-white text-2xl font-normal font-['Istok Web']"><Link to="/question">
            START
        </Link>
        </button>
    );
}
