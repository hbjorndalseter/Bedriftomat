import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Company } from "../types";

export default function ResultPage() {
    const location = useLocation();
    const { scores } = location.state;
    const [resultingCompanies, setResultingCompanies] = useState<Company[]>([]);

    const fetchMatchingCompanies = async () => {
        try {
            const response = await fetch("http://localhost:3000/matchingBusinesses", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(scores),
            });
            const data = await response.json();
            setResultingCompanies(data.topCompanies);
        } catch (error) {
            console.error("Error fetching matching businesses:", error);
        }
    };

    useEffect(() => {
        fetchMatchingCompanies();
        console.log("Fetching matching companies with scores:", scores);
    }, [scores]);

    return (
        <div>
            <p>Her får du resultatet ditt.</p>
            {resultingCompanies.map((company) => (
                <div key={company.id}>
                    <h3>{company.name}</h3>
                    <img src={company.logo} alt={company.name} />
                </div>
            ))}
        </div>
    );
}