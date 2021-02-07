import request from "../request";
import { QuestionsResponse } from "./types";

const getQuestions = async () => {
  return await request.get<QuestionsResponse>(
    "/api.php?amount=10&difficulty=hard&type=boolean"
  );
};

const questionsService = { getQuestions };

export default questionsService;
