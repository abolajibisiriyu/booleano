import * as React from "react";
import he from "he";

import { Question as QuestionType } from "app/api/questions/types";
import { Buttons, QuestionContainer } from "./styles";
import Button from "app/styles/elements/Button";
import H2 from "app/styles/elements/H2";

interface Props {
  question: QuestionType;
  onSelectAnswer: (answer: string) => void;
}
const Question: React.FC<Props> = (props) => {
  const { question, onSelectAnswer } = props;

  const onAnswerSelected = (answer: string) => () => {
    onSelectAnswer(answer);
  };

  return (
    <QuestionContainer>
      <H2 className="question-category">{question.category}</H2>
      <H2 big className="question">
        {he.decode(question.question)}
      </H2>
      <Buttons>
        <Button
          fullwidth
          type="button"
          variant="outline"
          onClick={onAnswerSelected("True")}
        >
          True
        </Button>
        <Button
          fullwidth
          type="button"
          variant="outline"
          onClick={onAnswerSelected("False")}
        >
          False
        </Button>
      </Buttons>
    </QuestionContainer>
  );
};

export default Question;
