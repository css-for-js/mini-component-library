/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--height": "8px",
    "--padding": "0px",
    "--radius": "4px",
  },
  medium: {
    "--height": "12px",
    "--radius": "4px",
    "--padding": "0px",
  },
  large: {
    "--height": "16px",
    "--radius": "8px",
    "--padding": "4px",
  },
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--radius);
  padding: var(--padding);
`;
const BarWrapper = styled.div`
  border-radius: 4px;
  /* Hide overflow when bar is nearly full */
  overflow: hidden;
`;
const Bar = styled.div`
  background-color: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
  height: var(--height);
  width: ${(props) => props.value}%;
`;

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  if (!styles) {
    throw new Error(`Unknown size passed to ProgressBar: ${size}`);
  }

  return (
    <>
      <Wrapper style={styles}>
        <BarWrapper style={styles}>
          <Bar style={styles} value={value} />
        </BarWrapper>
      </Wrapper>
      <VisuallyHidden>{value}%</VisuallyHidden>
    </>
  );
};

export default ProgressBar;
