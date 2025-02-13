import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Company } from "../types";
import { Link } from "react-router-dom";

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
    }, [scores]);

    async function checkLink(url: string) {
        const response = await fetch(url, { method: "HEAD" });
        if (!response.ok) {
            throw new Error("Siden er ikke tilgjengelig");
        }
    }

    function handleLinkClick(e: React.MouseEvent<HTMLAnchorElement>, url : string) {
        e.preventDefault();
        checkLink(url)
            .then(() => {
                window.location.href = url;
        })
        .catch((error) => {
            console.error(error);
            alert("Beklager, siden er ikke tilgjengelig for øyeblikket.");
        })
    }

    return (
        <div className="flex flex-col items-center w-[85%] h-[80%] text-white justify-around">
            {/* Økt mellomrom her */}
            <h2 className="text-2xl text-center">Gratulerer! Du matcher med følgende bedrifter:</h2>

            <div className="flex flex-col md:flex-row items-center md:items-end justify-around h-2/3 md:h-auto md:w-[500px]">
                {resultingCompanies.length >= 3 && (
                    <>
                        {/* 1. plass */}
                        <div className="flex flex-col items-center md:order-2">
                            <Link to={resultingCompanies[0].url} target="_blank" rel="noopener noreferrer">
                                <div className="bg-white text-black text-center p-2 rounded-lg w-40 h-30 flex items-center justify-center shadow-xl">
                                    <img src={resultingCompanies[0].logo} alt={resultingCompanies[0].name} className="h-1/1 object-contain max-w-90/100" />
                                </div>
                            </Link>
                        </div>

                        {/* 2. plass */}
                        <div className="flex flex-col items-center md:order-1">
                            <Link to={resultingCompanies[1].url} target="_blank" rel="noopener noreferrer">
                                <div className="bg-white text-black text-center p-2 rounded-lg w-32 h-24 flex items-center justify-center shadow-lg">
                                    <img src={resultingCompanies[1].logo} alt={resultingCompanies[1].name} className="h-1/1 object-contain max-w-90/100" />
                                </div>
                            </Link>
                        </div>

                        {/* 3. plass */}
                        <div className="flex flex-col items-center md:order-3">
                            <Link to={resultingCompanies[2].url} target="_blank" rel="noopener noreferrer">
                                <div className="bg-white text-black text-center p-2 rounded-lg md:w-32 md:h-24 w-28 h-22 flex items-center justify-center shadow-lg">
                                    <img src={resultingCompanies[2].logo} alt={resultingCompanies[2].name} className="h-1/1 object-contain max-w-90/100" />
                                </div>
                            </Link>
                        </div>
                    </>
                )}
            </div>

            <p className="text-2x1 text-center mb-[100%]">
                Sjekk standkartet vårt for å finne bedriftene i U1.
            </p>
            <div className="flex justify-between gap-x-[5%]">
                <button className="bg-white text-black p-2 rounded-lg w-36 h-12 flex items-center justify-center shadow-lg" >
                    <Link to="/">Prøv igjen</Link>
                </button>
                <button className="bg-white text-black p-2 rounded-lg w-36 h-12 flex items-center justify-center shadow-lg">
                    <a
                        href="https://www.ivdagene.no/standkart"
                        onClick={(e) => handleLinkClick(e, "https://www.ivdagene.no/standkart")}
                        className="no-underline"
                    >
                    Se standkart
                    </a>
                </button>
            </div>
        </div>
    );
}
