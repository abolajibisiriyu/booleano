import * as React from "react";
import { useHistory } from "react-router-dom";

import {
  QuestionsActions,
  QuestionsContext,
  QuestionsDispatch,
} from "app/providers/QuestionsProvider";

export default function useQuiz() {
  const { questions } = React.useContext(QuestionsContext);
  const questionsDispatch = React.useContext(QuestionsDispatch);

  const history = useHistory();

  const [activeQuestionIndex, setActiveQuestionIndex] = React.useState(0);
  const gotoNextQuestion = () => {
    if (questions && activeQuestionIndex < questions?.length - 1) {
      setActiveQuestionIndex((i) => i + 1);
    }
  };

  const [answers, setAnswers] = React.useState<string[]>([]);
  const onSelectAnswer = (answer: string) => {
    setAnswers((answers) => [...answers, answer]);
    gotoNextQuestion();
  };

  React.useEffect(() => {
    if (answers.length === questions?.length) {
      questionsDispatch({
        type: QuestionsActions.SET_ANSWERS,
        payload: answers,
      });
      history.push("/results");
    }
  }, [answers, questions, questionsDispatch, history]);

  React.useEffect(() => {
    if (!questions || !questions.length) {
      history.push("/");
    }
  }, [questions, history]);

  return { questions, onSelectAnswer, activeQuestionIndex };
}
