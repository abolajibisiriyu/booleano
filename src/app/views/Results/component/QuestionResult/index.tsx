import * as React from "react";
import he from "he";

import { Question } from "app/api/questions/types";
import { QuestionResultContainer } from "./styles";
import { ReactComponent as CorrectIcon } from "app/assets/img/icons/accept.svg";
import { ReactComponent as WrongIcon } from "app/assets/img/icons/cancel.svg";
import P from "app/styles/elements/P";

interface Props {
  question: Question;
  answer: string;
}
const QuestionResult: React.FC<Props> = (props) => {
  const { question, answer } = props;

  const Icon = question.correct_answer === answer ? CorrectIcon : WrongIcon;

  return (
    <QuestionResultContainer data-testid="question-result">
      <Icon />
      <P>{he.decode(question.question)}</P>
    </QuestionResultContainer>
  );
};

export default QuestionResult;
