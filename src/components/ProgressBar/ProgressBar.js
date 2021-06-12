/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const Wrapper = styled.div`
  position: relative;
  width: 50%;
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px rgba(128, 128, 128, 0.35);

  height: var(--height);
  border-radius: var(--border-radius);
  padding: var(--padding);
`;

const BarContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  overflow: hidden;
`;

const Bar = styled.div`
  position: relative;
  background-color: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
  width: ${(p) => p.value}%;
  height: 100%;
`;

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={{
        "--height": { large: "24px", medium: "12px", small: "8px" }[size],
        "--padding": { large: "4px", medium: "0", small: "0" }[size],
        "--border-radius": { large: "8px", medium: "4px", small: "4px" }[size],
      }}
    >
      <BarContainer>
        <VisuallyHidden>{`Progress: ${value}%`} </VisuallyHidden>
        <Bar value={value}></Bar>
      </BarContainer>
    </Wrapper>
  );
};

export default ProgressBar;
