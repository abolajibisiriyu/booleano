import App from "app/routes";
import { questions } from "tests/data";
import { setup, screen, fireEvent, waitFor } from "tests/setup";

test("Redirects to home when there are no questions", async () => {
  setup(<App />, { route: "/quiz" });

  const appName = screen.getByText(/booleano/i);
  expect(appName).toBeInTheDocument();
});

test("Shows Quiz page", async () => {
  setup(<App />, { route: "/quiz", initialState: { questions } });

  const questionIndex = screen.getByTestId("question-index");

  expect(questionIndex).toBeInTheDocument();
  expect(questionIndex).toHaveTextContent(`1/${questions.length}`);
});

test("Question index changes when user answers a question", async () => {
  setup(<App />, { route: "/quiz", initialState: { questions } });

  const questionIndex = screen.getByTestId("question-index");

  expect(questionIndex).toBeInTheDocument();
  expect(questionIndex).toHaveTextContent(`1/${questions.length}`);

  const optionsButton = screen.getByText("True");
  fireEvent.click(optionsButton);
  fireEvent.click(optionsButton);

  await waitFor(() => {
    expect(questionIndex).toHaveTextContent(`3/${questions.length}`);
  });
});
