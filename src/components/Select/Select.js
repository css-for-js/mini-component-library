import React, { useState } from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Wrapper isFocused={isFocused}>
      <Value>{displayedValue}</Value>
      <Icon id="chevron-down" strokeWidth={2} />
      <InvisibleSelect
        value={value}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={onChange}
      >
        {children}
      </InvisibleSelect>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
  padding: 12px 16px;
  border-radius: 8px;
  border: none;
  background: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  display: flex;
  align-items: center;
  outline: ${(props) => props.isFocused && "5px auto -webkit-focus-ring-color"};

  &:hover {
    color: ${COLORS.black};
  }
`;

const Value = styled.span`
  margin-right: 24px;
`;

const InvisibleSelect = styled.select`
  opacity: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  /* right: 0; */
  width: 100%;
`;

export default Select;
