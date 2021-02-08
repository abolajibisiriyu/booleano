import App from "app/routes";
import { setup, screen } from "./setup";

test("renders app name: booleano)", () => {
  setup(<App />);
  const appName = screen.getByText(/booleano/i);
  expect(appName).toBeInTheDocument();
});
