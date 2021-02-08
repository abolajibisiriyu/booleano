import * as React from "react";

import { RoutesContainerBox } from "./styles";

const RoutesContainer: React.FC = (props) => {
  return (
    <RoutesContainerBox>
      <div className="body">{props.children}</div>
    </RoutesContainerBox>
  );
};

export default RoutesContainer;
