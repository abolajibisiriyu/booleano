import styled from "@emotion/styled";
import Colors from "app/styles/constants/Colors";

export const ProgressBarBox = styled.div`
  width: 100%;
  height: 8px;
  border-radius: 12px;
  background-color: ${Colors.SWAN_WHITE};
`;

interface Props {
  width: string;
}
export const ProgressBarInner = styled.div<Props>`
  width: ${(props) => props.width}%;
  height: 100%;
  border-radius: 12px;
  background-color: ${Colors.SYNTHETIC_PUMPKIN};

  transition: width 300ms ease-in;
`;
