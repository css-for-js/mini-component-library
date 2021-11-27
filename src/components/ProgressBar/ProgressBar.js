/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--height": 8 + "px",
    "--padding": 0,
    "--borderRadius": 4 + "px",
  },
  medium: {
    "--height": 12 + "px",
    "--padding": 0,
    "--borderRadius": 4 + "px",
  },
  large: {
    "--height": 16 + "px",
    "--padding": "4px 4px 4px 4px",
    "--borderRadius": 8 + "px",
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];

  if (!styles) {
    throw new Error(`Unknown size passed to progress bar: ${size}`);
  }

  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={styles}
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <BarWrapper>
        <Bar style={styles} value={value || 0}></Bar>
      </BarWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: var(--padding);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--borderRadius);
  background-color: ${COLORS.transparentGray15};
`;

const BarWrapper = styled.div`
  border-radius: 4px;

  overflow: hidden;
`;

const Bar = styled.div`
  width: ${(p) => p.value + "%"};
  height: var(--height);
  background-color: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
`;

export default ProgressBar;
