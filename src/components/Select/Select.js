import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';


const InternalSelect = styled.select`
  appearance: none;
  padding: 12px 52px 12px 16px;

  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black};
  }
  width: ${p => p.displayedValue.length * 8 + 68 - 8}px;
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;

`

const Wrapper = styled.div`
  position: relative;
  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black};
    ${InternalSelect} {
      color: ${COLORS.black};
    }
  }
  `
const IconWrapper = styled(Icon)`
  position: absolute;
  top: 8px;
  left: ${p => p.displayedValue.length * 8 + 24}px;
  pointer-events: none;
`


const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
  return (
    <Wrapper>
      <InternalSelect
        aria-label={label}
        displayedValue={displayedValue}
        value={value}
        onChange={onChange}>
        {children}
      </InternalSelect>
      <IconWrapper displayedValue={displayedValue} id={"chevron-down"} />
    </Wrapper>
  );
};

export default Select;
