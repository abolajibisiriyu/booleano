import App from "app/routes";
import { questions, answers } from "tests/data";
import { setup, screen } from "tests/setup";

test("Redirects to home when there are no questions or answers", async () => {
  setup(<App />, { route: "/quiz" });

  const appName = screen.getByText(/booleano/i);
  expect(appName).toBeInTheDocument();
});

test("Shows Results page", async () => {
  setup(<App />, { route: "/results", initialState: { questions, answers } });

  const resultsPage = screen.getByTestId("results-page");

  expect(resultsPage).toBeInTheDocument();
});

test("Shows users correct score", async () => {
  setup(<App />, { route: "/results", initialState: { questions, answers } });

  const userScore = screen.getByTestId("user-score");

  expect(userScore).toBeInTheDocument();
  expect(userScore).toHaveTextContent(`6/${questions.length}`);
});

test("Shows answered questions", async () => {
  setup(<App />, { route: "/results", initialState: { questions, answers } });

  const userScore = screen.getAllByTestId("question-result");

  expect(userScore.length).toBe(questions.length);
});

test("User can restart game", async () => {
  setup(<App />, { route: "/results", initialState: { questions, answers } });

  const optionsButton = screen.getByText("PLAY AGAIN?");

  expect(optionsButton).toBeInTheDocument();
});
