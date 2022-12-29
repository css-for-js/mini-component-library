import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Wrapper = styled.div`
  position: relative;
  height: 43px;
  width: fit-content;
  
  &hover {
    color: ${COLORS.black}
  }
  `

const NativeSelect = styled.select`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
`

const CustomSelect = styled.div`
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  color: ${COLORS.gray700};
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
  font-size: ${16/16}rem;
  border: none;
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 24px;
  
  ${NativeSelect}:hover + & {
    color: ${COLORS.black}
  }
`

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <CustomSelect>
        {displayedValue}
        <Icon id="chevron-down" strokeWidth={2} size={24}/>
      </CustomSelect>
    </Wrapper>
  );
};

export default Select;
