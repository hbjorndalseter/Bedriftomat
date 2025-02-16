// Progress er i [0-1] i forhold til antall spørsmål
export default function ProgressBar({ progress }: { progress: number }) {
    return (
        <div className="w-9/10 bg-gray-300 rounded pt-16">
            <div
            className="bg-green-500 h-2 rounded transition-width duration-300 ease-in-out"
            style={{ width: `${progress * 100}%` }}
            />
        </div>
    );
}