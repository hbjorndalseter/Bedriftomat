import StartButton from '../components/StartButton';

export default function StartPage() {
    return (
        <div className="start-page">
            <h1 className="start-page-heading">BEDRIFTOMAT</h1>
            <p className="start-page-text">
              Velkommen til vår bedriftomat. Her vil du kunne få forslag til hvilke bedrifter som passer deg, som du senere kan møte på stand i U1! Alt du trenger å gjøre er å svare på noen enkle og morsomme spørsmål.
            </p>
            <StartButton title="START" />
        </div>
    );
};