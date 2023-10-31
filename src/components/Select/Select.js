import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
  return (
    <SelectWrapper style={{
      '--background': COLORS.transparentGray15, 
      '--color': COLORS.black
    }}>
      <select value={value} onChange={onChange}>
        {children}
      </select>
      {displayedValue}
      <Icon id='chevron-down'></Icon>
    </SelectWrapper>
  );
};

const SelectWrapper = styled.div`
  display: inline-block;
  background-color: var(--background);
  padding: 12px 16px;
  color: ${COLORS.gray700}; 
  font-size: 16px;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
  line-height: normal;
  position: relative;
  display: flex;
  gap: 24px;
  width: fit-content;
  border: none;
  border-radius: 8px;
  select {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
  &:hover{
    color: var(--color);
  }
`



export default Select;
