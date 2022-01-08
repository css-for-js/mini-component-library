import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const CHEVRON_SIZE = "24px";

const NativeSelect = styled.select`
  -webkit-appearance: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0%;
`;

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const PresentationSelect = styled.div`
  padding: 12px 52px 12px 16px;
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  font-size: (16/16) rem;
  border-radius: 4px;

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
  ${NativeSelect}:focus + & {
    outline: black auto 1px;
    outline: -webkit-focus-ring-color auto 1px;
  }
`;

const SelectIcon = styled(Icon)`
  position: absolute;
  top: calc(50% - ${CHEVRON_SIZE} / 2);
  right: 16px;
  margin: auto;
  pointer-events: none;
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationSelect>
        {displayedValue}
        <SelectIcon id="chevron-down" size={CHEVRON_SIZE} />
      </PresentationSelect>
    </Wrapper>
  );
};

export default Select;
