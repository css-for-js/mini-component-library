/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size }) => {
  const Wrapper = {
    small: SmallWrapper,
    medium: MediumWrapper,
    large: LargeWrapper,
  }[size];

  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <VisuallyHidden>{`${value}%`}</VisuallyHidden>
      <BarTrimmer>
        <Bar style={{ width: `${value}%` }} />
      </BarTrimmer>
    </Wrapper>
  );
};

const WrapperBase = styled.div`
  width: 375px;
  background: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const LargeWrapper = styled(WrapperBase)`
  height: 24px;
  padding: 4px;
  border-radius: 8px;
`;

const MediumWrapper = styled(WrapperBase)`
  height: 12px;
  padding: 0;
  border-radius: 4px;
`;

const SmallWrapper = styled(WrapperBase)`
  height: 8px;
  padding: 0;
  border-radius: 4px;
`;

const BarTrimmer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  overflow: hidden;
`;

const Bar = styled.div`
  background-color: ${COLORS.primary};
  height: 100%;
  /*  */
  border-radius: 4px 0px 0px 4px;
`;

export default ProgressBar;
