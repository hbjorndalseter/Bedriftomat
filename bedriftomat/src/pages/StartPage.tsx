import { useEffect, useState } from 'react';

export default function StartPage() {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/numCompanies')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error));
    }, []);

    const handleClick = () => {
        fetch('http://localhost:3000/test')
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
    }

    return (
        <div className="flex flex-col justify-center max-w-lg">
            <h1>Tittel: Bedriftomat</h1>
            <p>Info om bedriftomaten...</p>
            {data && <p>Antall bedrifter: {data.count}</p>}
            <button onClick={handleClick}>Start</button>
        </div>
    )
}