/* eslint-disable no-unused-vars */
import React from "react";
import styled, { CSSProperties } from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const MIN = 0;
const MAX = 10;

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
  "aria-valuenow": `${props["data-value"]}`,
  "aria-valuemin": MIN,
  "aria-valuemax": MAX, // Every <Button /> will now have type="button" as default
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
  width: ${(props) => `${props["data-value"]}%`};
  transition: width 0.3s;
  background-color: ${COLORS.primary};
`;

const ProgressBar = ({ value, size }) => {
  const selectedStyle = SIZES[size];
  const resolvedValue =
    typeof value !== "number" || value < MIN
      ? 0
      : value > MAX
      ? 100
      : 100 * ((value - MIN) / (MAX - MIN));
  return (
    <OuterWrapper style={selectedStyle} data-value={value}>
      <ProgressMask>
        <Progress data-value={resolvedValue} />
        <VisuallyHidden>{value}%</VisuallyHidden>
      </ProgressMask>
    </OuterWrapper>
  );
};

export default ProgressBar;
