import * as React from "react";
import { useQuery, useQueryClient } from "react-query";
import { useHistory } from "react-router-dom";
import { AxiosError, AxiosResponse } from "axios";

import questionsService from "app/api/questions";
import parseError from "app/utils/parseError";
import { notify } from "app/utils/toast";
import { QuestionsResponse } from "app/api/questions/types";
import {
  QuestionsActions,
  QuestionsContext,
  QuestionsDispatch,
} from "app/providers/QuestionsProvider";

export default function useQuestions() {
  const queryClient = useQueryClient();
  const { data, error, refetch, isFetching } = useQuery<
    AxiosResponse<QuestionsResponse>,
    AxiosError<any>
  >("questions", questionsService.getQuestions, {
    enabled: false,
    refetchOnWindowFocus: false,
  });
  const fetchQuestions = () => {
    refetch();
  };

  const questionsDispatch = React.useContext(QuestionsDispatch);
  const { questions } = React.useContext(QuestionsContext);

  const history = useHistory();

  React.useEffect(() => {
    if (data?.data) {
      const questions = data.data.results;
      questionsDispatch({
        type: QuestionsActions.SET_QUESTIONS,
        payload: questions,
      });
    }
  }, [data, questionsDispatch]);

  React.useEffect(() => {
    if (error) {
      const errorMessage = parseError(error);
      notify(errorMessage, { variant: "error" });
    }
  }, [error]);

  React.useEffect(() => {
    if (!error && questions && questions?.length) {
      history.push("/quiz");
    }
  }, [error, questions, history]);

  // clear query cache on cleanup
  React.useEffect(() => {
    return () => {
      queryClient.removeQueries("questions");
    };
  }, [queryClient]);

  return { fetchQuestions, isFetching };
}
