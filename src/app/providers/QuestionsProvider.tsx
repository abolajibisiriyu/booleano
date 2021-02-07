import * as React from "react";

import { DispatchAction } from "./types";

export type QuestionsContextType = {
  questions?: any[];
};

const INITIAL_STATE = { questions: undefined };

export const QuestionsContext = React.createContext<QuestionsContextType>({});

export const QuestionsActions = {
  SET_QUESTIONS: "SET_QUESTIONS",
  CLEAR_QUESTIONS: "CLEAR_QUESTIONS",
};

function reducer(state: QuestionsContextType, action: DispatchAction) {
  switch (action.type) {
    case QuestionsActions.SET_QUESTIONS:
      return { ...state, questions: action.payload };
    case QuestionsActions.CLEAR_QUESTIONS:
      return { ...state, questions: undefined };
    default:
      throw new Error();
  }
}

export const QuestionsDispatch = React.createContext<
  React.Dispatch<DispatchAction>
>(() => {});

const QuestionsProvider: React.FC = (props) => {
  const [tokens, dispatch] = React.useReducer(reducer, INITIAL_STATE);

  return (
    <QuestionsDispatch.Provider value={dispatch}>
      <QuestionsContext.Provider value={tokens}>
        {props.children}
      </QuestionsContext.Provider>
    </QuestionsDispatch.Provider>
  );
};

export default QuestionsProvider;
