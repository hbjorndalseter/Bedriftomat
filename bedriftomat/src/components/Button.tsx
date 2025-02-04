interface ButtonProps {
    navn: string;
}

export default function Button({ navn }: ButtonProps) {

    return (
        <div className="w-[335px] h-[72px] bg-[#2d3b87] rounded-[36px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
            <div className="w-[164px] h-[71px] text-center text-white text-2xl font-normal font-['Istok Web']">
                <h2>{navn}</h2>
            </div>
        </div>
    );
}

