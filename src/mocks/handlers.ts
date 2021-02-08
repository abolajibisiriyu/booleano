import { rest } from "msw";
import { questions } from "tests/data";

export const handlers = [
  rest.get(`${process.env.REACT_APP_BASE_API_URL}/api.php`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ response_code: 0, questions }));
  }),
];

export const failedQuestionsRequest = rest.get(
  `${process.env.REACT_APP_BASE_API_URL}/api.php`,
  (req, res, ctx) => {
    return res(ctx.status(500));
  }
);
