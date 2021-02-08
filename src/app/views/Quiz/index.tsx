import P from "app/styles/elements/P";
import ProgressBar from "./components/ProgressBar";
import Question from "./components/Question";
import useQuiz from "./hooks/useQuiz";
import { QuizContainer } from "./styles";

export default function Quiz() {
  const { questions, activeQuestionIndex, onSelectAnswer } = useQuiz();

  if (!questions) return null;

  return (
    <QuizContainer data-testid="quiz-page">
      <P className="question-index" data-testid="question-index">
        Question {activeQuestionIndex + 1}/<span>{questions.length}</span>
      </P>
      <ProgressBar
        totalNumber={questions.length}
        activeIndex={activeQuestionIndex + 1}
      />
      <Question
        question={questions[activeQuestionIndex]}
        onSelectAnswer={onSelectAnswer}
      />
    </QuizContainer>
  );
}
