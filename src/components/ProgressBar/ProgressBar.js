/* eslint-disable no-unused-vars */
import React from "react";
import styled, { css } from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size }) => {
  return (
    <ProgressWrapper size={size} role="progressbar" aria-valuenow={value}>
      <VisuallyHidden>{value}%</VisuallyHidden>
      <ProgressIndicator value={value} size={size} />
    </ProgressWrapper>
  );
};

const ProgressIndicator = styled.div`
  width: ${(props) => `${Math.min(Math.max(props.value, 0), 100)}%`};
  height: 100%;
  background-color: ${COLORS.primary};

  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;

  ${(props) => {
    if (Math.min(Math.max(props.value, 0), 100) > 99) {
      return css`
        border-radius: 4px;
      `;
    }
  }}
`;

const ProgressWrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  width: 370px;
  overflow: hidden;
  box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};

  ${(props) => {
    switch (props.size) {
      case "medium":
        return css`
          height: 16px;
        `;
      case "large":
        return css`
          height: 24px;
          padding: 4px;
        `;
      default:
        return css`
          height: 8px;
        `;
    }
  }};
`;

export default ProgressBar;
