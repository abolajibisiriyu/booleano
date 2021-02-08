import Button from "app/styles/elements/Button";
import P from "app/styles/elements/P";
import QuestionsResultList from "./component/QuestionsResultList";
import useResults from "./hooks/useResults";
import { ResultsContainer } from "./styles";

export default function Results() {
  const { playAgain, questions, answers, correctAnswers } = useResults();

  if (!questions || !answers) return null;

  return (
    <ResultsContainer data-testid="results-page">
      <P>You scored</P>
      <P className="score" data-testid="user-score">
        <span>{correctAnswers}</span>/{questions.length}
      </P>
      <QuestionsResultList questions={questions} answers={answers} />
      <Button type="button" variant="blue" onClick={playAgain}>
        PLAY AGAIN?
      </Button>
    </ResultsContainer>
  );
}
