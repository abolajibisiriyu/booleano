import * as React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import QuestionsProvider, { QuestionsContextType } from "./QuestionsProvider";
import QueryProvider from "./QueryProvider";

interface Props {
  initialQuestionState?: QuestionsContextType;
  queryConfig?: any;
}
const Providers: React.FC<Props> = (props) => {
  return (
    <QuestionsProvider initialState={props.initialQuestionState}>
      <QueryProvider queryConfig={props.queryConfig}>
        <ToastContainer
          className="toast__container"
          toastClassName="toast__toast"
          bodyClassName="toast__body"
          closeButton={false}
          hideProgressBar={true}
          position="bottom-center"
        />
        {props.children}
      </QueryProvider>
    </QuestionsProvider>
  );
};

export default Providers;
