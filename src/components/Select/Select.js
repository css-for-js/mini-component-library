import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <CustomSelect value={value} onChange={onChange}>
        {children}
      </CustomSelect>
      <DisplayWrapper>
        {displayedValue}
        <Icon id="chevron-down" strokeWidth={2}></Icon>
      </DisplayWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  background: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  width: fit-content;
  border-radius: 8px;
`;

const DisplayWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 12px 16px;
  text-wrap: nowrap;
`;

const CustomSelect = styled.select`
  appearance: none;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  border: none;
`;

export default Select;
