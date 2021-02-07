import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import QuestionsProvider from "./providers/QuestionsProvider";
import QueryProvider from "./providers/QueryProvider";

import Routes from "./routes";

function App() {
  return (
    <QuestionsProvider>
      <QueryProvider>
        <ToastContainer
          className="toast__container"
          toastClassName="toast__toast"
          bodyClassName="toast__body"
          closeButton={false}
          hideProgressBar={true}
          position="bottom-center"
        />
        <Routes />
      </QueryProvider>
    </QuestionsProvider>
  );
}

export default App;
