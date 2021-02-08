import { css } from "@emotion/react";
import styled from "@emotion/styled";

import Colors from "../constants/Colors";

export interface ButtonProps {
  fullwidth?: boolean;
  variant?: "blue" | "outline";
  medium?: boolean;
  small?: boolean;
}

const Button = styled.button<ButtonProps>`
  height: 54px;
  padding: 0px 44px;
  border: 1px solid transparent;
  border-radius: 32px;
  transition: background-color 300ms ease-in;
  text-decoration: none;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.75;
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
      case "blue":
        return css`
          background-color: ${Colors.PURPLE};
          color: ${Colors.White100};
          border-color: ${Colors.PURPLE};
        `;
      case "outline":
        return css`
          background-color: transparent;
          color: ${Colors.White100};
          border-color: ${Colors.PURPLE};
        `;
    }
  }};
`;

export default Button;
