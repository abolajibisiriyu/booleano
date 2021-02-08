import { Question } from "app/api/questions/types";
import * as React from "react";

import { DispatchAction } from "./types";

export const QuestionsActions = {
  SET_QUESTIONS: "SET_QUESTIONS",
  CLEAR_QUESTIONS: "CLEAR_QUESTIONS",
  //
  SET_ANSWERS: "SET_ANSWERS",
  CLEAR_ANSWERS: "CLEAR_ANSWERS",
};

export type QuestionsContextType = {
  questions?: Question[];
  answers?: string[];
};

const INITIAL_STATE: QuestionsContextType = {
  questions: undefined,
  answers: undefined,
};

export const QuestionsContext = React.createContext<QuestionsContextType>({});

function reducer(
  state: QuestionsContextType,
  action: DispatchAction
): QuestionsContextType {
  switch (action.type) {
    case QuestionsActions.SET_QUESTIONS:
      return { ...state, questions: action.payload };
    case QuestionsActions.CLEAR_QUESTIONS:
      return { ...state, questions: undefined };
    //
    case QuestionsActions.SET_ANSWERS:
      return { ...state, answers: action.payload };
    case QuestionsActions.CLEAR_ANSWERS:
      return { ...state, answers: undefined };
    //
    default:
      throw new Error();
  }
}

export const QuestionsDispatch = React.createContext<
  React.Dispatch<DispatchAction>
>(() => {});

interface Props {
  initialState?: {
    questions?: Question[];
    answers?: string[];
  };
}
const QuestionsProvider: React.FC<Props> = (props) => {
  const [tokens, dispatch] = React.useReducer(
    reducer,
    props.initialState || INITIAL_STATE
  );

  return (
    <QuestionsDispatch.Provider value={dispatch}>
      <QuestionsContext.Provider value={tokens}>
        {props.children}
      </QuestionsContext.Provider>
    </QuestionsDispatch.Provider>
  );
};

export default QuestionsProvider;
