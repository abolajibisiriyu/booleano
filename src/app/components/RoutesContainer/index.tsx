import * as React from "react";

import { RoutesContainerBox } from "./styles";
import "./particles.scss";

const RoutesContainer: React.FC = (props) => {
  return (
    <RoutesContainerBox>
      <div className="body">{props.children}</div>

      {Array(30)
        .fill(0)
        .map((i, index) => (
          <div key={index + 1} className="particle" />
        ))}
    </RoutesContainerBox>
  );
};

export default RoutesContainer;
