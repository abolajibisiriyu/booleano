import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import QuestionsProvider from "app/providers/QuestionsProvider";
import QueryProvider from "app/providers/QueryProvider";

import Routes from "app/routes";

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
        <Router>
          <Routes />
        </Router>
      </QueryProvider>
    </QuestionsProvider>
  );
}

export default App;
