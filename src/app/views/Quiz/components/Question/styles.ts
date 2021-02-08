import styled from "@emotion/styled";

export const QuestionContainer = styled.div`
  margin-top: 20px;
  padding: 20px 0px;

  flex-grow: 1;

  display: flex;
  flex-direction: column;

  .question-category {
    margin-bottom: 40px;
  }

  .question {
    line-height: 40px;
    margin-bottom: 30px;
    font-weight: 300;
    word-break: break-word;
    flex-grow: 1;
  }
`;

export const Buttons = styled.div`
  width: 100%;

  button:first-of-type {
    margin-bottom: 20px;
  }
`;
