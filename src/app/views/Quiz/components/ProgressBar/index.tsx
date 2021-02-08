import * as React from "react";

import { ProgressBarBox, ProgressBarInner } from "./styles";

interface Props {
  activeIndex: number;
  totalNumber: number;
}
const ProgressBar: React.FC<Props> = (props) => {
  const { activeIndex, totalNumber } = props;

  const progress = (activeIndex * 100) / totalNumber;

  return (
    <ProgressBarBox>
      <ProgressBarInner width={progress.toString()} />
    </ProgressBarBox>
  );
};

export default ProgressBar;
