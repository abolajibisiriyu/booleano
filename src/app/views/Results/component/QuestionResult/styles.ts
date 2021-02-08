import styled from "@emotion/styled";

export const QuestionResultContainer = styled.div`
  display: flex;
  align-items: flex-start;

  &:not(:last-of-type) {
    margin-bottom: 30px;
  }

  & > svg {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    margin-right: 20px;
    margin-top: 5px;
  }

  & > p {
    line-height: 28px;
  }
`;
