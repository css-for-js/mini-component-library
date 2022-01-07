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

const OuterWrapper = styled.div`
  width: 100%;
  height: var(--height);
  padding: var(--padding);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  background-color: ${COLORS.transparentGray15};
  border-radius: 4px;
`;

const InnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${COLORS.primary};
  content: "";
  border-radius: 4px;
`;

const ProgressBar = ({ value, size }) => {
  const selectedStyle = SIZES[size];
  return (
    <OuterWrapper style={selectedStyle}>
      <InnerWrapper>&nbsp;</InnerWrapper>
    </OuterWrapper>
  );
};

export default ProgressBar;
