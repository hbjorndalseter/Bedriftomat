import StartButton from '../components/StartButton';

export default function StartPage() {
    return (
        <div className="start-page">
            {/* <img src="/src/assets/bedriftomat.png" alt="Bedriftomat" className="start-page-image" /> */}
            <p className="start-page-text">
            Velkommen til vår Bedriftomat!
            Her kan du finne ut hvilke bedrifter som passer best for deg basert på dine interesser og karriereønsker. Bedriftene du matcher med, kan du senere møte på stand i U1!
            Alt du trenger å gjøre er å svare på noen enkle og morsomme spørsmål. Klar til å starte?
            </p>
            <StartButton title="START" />
        </div>
    );
};