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

    return (
        <div className="flex flex-col items-center w-[85%] h-[80%] text-white justify-around">
            {/* Økt mellomrom her */}
            <h2 className="text-2xl font-bold text-center ">Gratulerer! Du matcher med følgende bedrifter:</h2>
            
            <div className="flex items-end justify-center gap-x-8">
                {resultingCompanies.length >= 3 && (
                    <>
                        {/* 2. plass */}
                        <div className="flex flex-col items-center">
                            <div className="bg-white text-black text-center p-2 rounded-lg w-24 h-32 flex items-center justify-center shadow-lg">
                                <img src={resultingCompanies[1].logo} alt={resultingCompanies[1].name} className="h-16 object-contain max-w-90/100" />
                            </div>
                            <p className="mt-2 font-bold text-lg">2</p>
                        </div>

                        {/* 1. plass */}
                        <div className="flex flex-col items-center">
                            <div className="bg-white text-black text-center p-2 rounded-lg w-28 h-40 flex items-center justify-center shadow-xl">
                                <img src={resultingCompanies[0].logo} alt={resultingCompanies[0].name} className="h-20 object-contain max-w-90/100" />
                            </div>
                            <p className="mt-2 font-bold text-lg">1</p>
                        </div>

                        {/* 3. plass */}
                        <div className="flex flex-col items-center">
                            <div className="bg-white text-black text-center p-2 rounded-lg w-24 h-28 flex items-center justify-center shadow-lg">
                                <img src={resultingCompanies[2].logo} alt={resultingCompanies[2].name} className="h-14 object-contain max-w-90/100" />
                            </div>
                            <p className="mt-2 font-bold text-lg">3</p>
                        </div>
                    </>
                )}
            </div>

            <p className="text-sm text-center mb-[100%]">
                Sjekk standkartet for hvor du finner bedriftene og si *kodeord* for *premie*.
            </p>
            <div className="flex justify-between gap-x-[5%]">
                <button className="bg-white text-black p-2 rounded-lg w-36 h-12 flex items-center justify-center shadow-lg" >
                    <Link to="/">Prøv igjen</Link>
                </button>
                <button className="bg-white text-black p-2 rounded-lg w-36 h-12 flex items-center justify-center shadow-lg hover:bg-amber-600">
                    <Link to="https://www.ivdagene.no/standkart">Se standkart</Link>
                </button>
            </div>
        </div>
    );
}