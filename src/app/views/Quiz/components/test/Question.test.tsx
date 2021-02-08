import Question from "../Question";
import { fireEvent, render, screen } from "tests/setup";
import { questions } from "tests/data";

test("User can answer a question", () => {
  const onSelectAnswer = jest.fn();

  render(<Question question={questions[0]} onSelectAnswer={onSelectAnswer} />);

  const optionsButton = screen.getByText("True");

  expect(optionsButton).toBeInTheDocument();

  fireEvent.click(optionsButton);

  expect(onSelectAnswer).toBeCalled();
  expect(onSelectAnswer).toBeCalledTimes(1);
});
