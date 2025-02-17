import { Link } from "react-router-dom";

interface StartButtonProps {
    title: string;
}

export default function StartButton({ title }: StartButtonProps) {
    return (
        <button className="start-button">
            <Link to="/question">
                {title}
            </Link>
        </button>
    );
}
