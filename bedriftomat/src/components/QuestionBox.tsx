import React from 'react';

interface QuestionBoxProps {
    question: string;
    onAnswer: (answer: string) => void;
}

const QuestionBox: React.FC<QuestionBoxProps> = ({ question, onAnswer }) => {
    const [answer, setAnswer] = React.useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onAnswer(answer);
        setAnswer('');
    };

    return (
        <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto">
            <h2 className="text-xl font-semibold mb-4">{question}</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                    placeholder="Type your answer here"
                />
                <div className="grid grid-cols-2 gap-4">
                    <button
                        type="button"
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-all"
                        onClick={() => onAnswer('Option 1')}
                    >
                        Option 1
                    </button>
                    <button
                        type="button"
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-all"
                        onClick={() => onAnswer('Option 2')}
                    >
                        Option 2
                    </button>
                    <button
                        type="button"
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-all"
                        onClick={() => onAnswer('Option 3')}
                    >
                        Option 3
                    </button>
                    <button
                        type="button"
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-all"
                        onClick={() => onAnswer('Option 4')}
                    >
                        Option 4
                    </button>
                </div>
            </form>
        </div>
    );
};

export default QuestionBox;