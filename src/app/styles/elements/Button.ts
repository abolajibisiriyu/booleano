import { css } from "@emotion/react";
import styled from "@emotion/styled";

import Colors from "../constants/Colors";

export interface ButtonProps {
  fullwidth?: boolean;
  variant?: "black" | "blue" | "clear" | "outline";
  medium?: boolean;
  small?: boolean;
}

const Button = styled.button<ButtonProps>`
  height: 54px;
  /* width: 180px; */
  padding: 0px 44px;
  border: 1px solid transparent;
  border-radius: 3px;
  transition: background-color 300ms ease-in;
  text-decoration: none;
  font-family: "Aribau-Grotesk";
  font-size: 1rem;
  /* font-weight: 500; */
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }

  ${(props) =>
    props.fullwidth &&
    css`
      width: 100%;
    `};

  ${(props) =>
    props.medium &&
    css`
      font-size: 0.8rem;
    `};

  ${(props) =>
    props.small &&
    css`
      font-size: 0.6rem;
      height: 36px;
      width: 82px;
    `};

  ${(props) => {
    switch (props.variant) {
      case "black":
        return css`
          background-color: ${Colors.Black100};
          color: ${Colors.White100};
          border-color: ${Colors.Black100};

          &:disabled {
            background: rgba(0, 0, 0, 0.75);
          }
        `;
      case "blue":
        return css`
          background-color: ${Colors.Blue100};
          color: ${Colors.White100};
          border: ${Colors.Blue100};

          &:disabled {
            opacity: 0.75;
          }
        `;
      case "outline":
        return css`
          background-color: ${Colors.White100};
          color: ${Colors.Black100};
          border: 1px solid #cbd2d9;

          &:disabled {
            /* background: rgba(0, 0, 0, 0.75); */
          }
        `;
      case "clear":
        return css`
          background-color: transparent;
          color: ${Colors.Black100};
          border: none;
        `;
    }
  }};
`;

export default Button;
