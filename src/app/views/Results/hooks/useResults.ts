import * as React from "react";
import { useHistory } from "react-router-dom";

import {
  QuestionsActions,
  QuestionsContext,
  QuestionsDispatch,
} from "app/providers/QuestionsProvider";

export default function useResults() {
  const { questions, answers } = React.useContext(QuestionsContext);
  const questionsDispatch = React.useContext(QuestionsDispatch);

  const history = useHistory();

  const playAgain = () => {
    history.push("/");
  };

  const getCorrectAnswers = React.useCallback(() => {
    if (!questions || !answers) return 0;

    const result = questions?.reduce((prev, curr, index) => {
      if (curr.correct_answer === answers[index]) return prev + 1;
      return prev;
    }, 0);

    return result;
  }, [questions, answers]);

  const correctAnswers = React.useMemo(() => getCorrectAnswers(), [
    getCorrectAnswers,
  ]);

  React.useEffect(() => {
    if (!questions || !questions.length || !answers || !answers.length) {
      history.push("/");
    }
  }, [questions, answers, history]);

  React.useEffect(() => {
    return () => {
      questionsDispatch({ type: QuestionsActions.CLEAR_QUESTIONS });
      questionsDispatch({ type: QuestionsActions.CLEAR_ANSWERS });
    };
  }, [questionsDispatch]);

  return { playAgain, questions, answers, correctAnswers };
}
