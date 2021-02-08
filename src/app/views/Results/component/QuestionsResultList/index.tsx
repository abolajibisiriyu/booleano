import { Question } from "app/api/questions/types";
import * as React from "react";

import { QuestionList } from "./styles";
import QuestionResult from "../QuestionResult";

interface Props {
  questions: Question[];
  answers: string[];
}
const QuestionsResultList: React.FC<Props> = (props) => {
  const { questions, answers } = props;

  return (
    <QuestionList>
      {questions.map((question, i) => (
        <QuestionResult key={i} question={question} answer={answers[i]} />
      ))}
    </QuestionList>
  );
};

export default QuestionsResultList;
