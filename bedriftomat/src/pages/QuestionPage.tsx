import { useEffect } from "react"

export default function QuestionPage() {

    [data, setData] = useState([])
    [result,setresult] = useState([zeros*companies.length])

    useEffect(() => {
    fetch("getQuestions") {
        .then(response => response.json())
        .then(data => {
            
        })
    }, []}

    return(
        <p>Her svarer du på spørsmålene.</p>
        <QuestionBox />
        <AnswerBox />
        <AnswerBox />
        <AnswerBox  />
        <AnswerBox />
        <AnswerBox />
        <NextButton />
    )
}