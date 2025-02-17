import { Link } from "react-router-dom";

interface StartButtonProps {
    title: string;
}

export default function StartButton({ title }: StartButtonProps) {
    return (
        <Link to="/question" className="start-button">
            {title}
        </Link>
    );
}
