/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const Wrapper = styled.div`
  position: relative;
  width: 370px;
  height: 24px;
  border-radius: 8px;
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px rgba(128, 128, 128, 0.35);
  padding: 4px;
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
    <Wrapper>
      <BarContainer>
        <VisuallyHidden>{`Progress: ${value}%`} </VisuallyHidden>
        <Bar value={value}></Bar>
      </BarContainer>
    </Wrapper>
  );
};

export default ProgressBar;
