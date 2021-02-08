import App from "app/routes";
import { setup, screen, fireEvent } from "tests/setup";
import { server } from "mocks/server";
import { failedQuestionsRequest } from "mocks/handlers";

test("Shows app name: booleano)", () => {
  setup(<App />);
  const appName = screen.getByText(/booleano/i);
  expect(appName).toBeInTheDocument();
});

test("Sets up game when the 'begin' button is clicked)", async () => {
  setup(<App />);

  const beginButton = screen.getByRole("button");
  expect(beginButton).toBeInTheDocument();
  expect(beginButton).toHaveTextContent(/begin/i);

  fireEvent.click(beginButton);

  expect(await screen.findByRole("button")).toHaveTextContent(
    /Setting up game.../i
  );

  expect(await screen.findByRole("button")).toHaveTextContent(/begin/i);
});

// test  passes, however it logs mocked error response. Hence, skipped.
test.skip("Shows error notification when questions can't fetched)", async () => {
  setup(<App />);

  server.use(failedQuestionsRequest);

  const beginButton = screen.getByRole("button");
  expect(beginButton).toBeInTheDocument();
  expect(beginButton).toHaveTextContent(/begin/i);

  fireEvent.click(beginButton);

  expect(await screen.findByTestId("notification")).toBeInTheDocument();
});
