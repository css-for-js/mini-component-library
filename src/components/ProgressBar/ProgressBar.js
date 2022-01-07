/* eslint-disable no-unused-vars */
import React from "react";
import styled, { CSSProperties } from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  large: {
    "--height": "24px",
    "--padding": "4px",
  },
  medium: {
    "--height": "12px",
    "--padding": 0,
  },
  small: {
    "--height": "8px",
    "--padding": 0,
  },
};

const OuterWrapper = styled.div.attrs((props) => ({
  role: "progressbar",
  "aria-valuenow": `${props.value}`,
  "aria-valuemin": "0",
  "aria-valuemax": "100", // Every <Button /> will now have type="button" as default
}))`
  width: 100%;
  height: var(--height);
  padding: var(--padding);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  background-color: ${COLORS.transparentGray15};
  border-radius: 4px;
  position: relative;
`;

const ProgressMask = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  overflow-x: hidden;
`;

const Progress = styled.div`
  height: 100%;
  width: ${(props) => `${props.value}%`};
  transition: width 0.3s;
  background-color: ${COLORS.primary};
`;

const ProgressBar = ({ value, size }) => {
  const selectedStyle = SIZES[size];
  const resolvedValue =
    typeof value !== "number" || value < 0 ? 0 : value > 100 ? 100 : value;
  return (
    <OuterWrapper style={selectedStyle} value={resolvedValue}>
      <ProgressMask>
        <Progress value={resolvedValue} />
      </ProgressMask>
    </OuterWrapper>
  );
};

export default ProgressBar;
