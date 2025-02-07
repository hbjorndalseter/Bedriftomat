import { useEffect, useState } from 'react';

export default function StartPage() {

    const [count, setCount] = useState(0);

    const fetchCount = async () => {
        try {
            const response = await fetch('http://localhost:3000/numCompanies');
            const data = await response.json();
            setCount(data.count);
            console.log(count);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchCount();
    }, []);

        const handleClick = () => {
            fetch('http://localhost:3000/test')
                .then(response => response.json())
                .then(data => { console.log(data.text); })
                .catch(error => console.error(error));
        }

    return (
        <div className="flex flex-col justify-center max-w-lg">
            <h1>Tittel: Bedriftomat</h1>
            <p>Info om bedriftomaten...</p>
            {count && <p>Antall bedrifter: {count}</p>}
            <button onClick={handleClick}>Start</button>
        </div>
    )
}