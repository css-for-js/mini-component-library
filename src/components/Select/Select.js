import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';

const Select = ({ label, value, children, ...delegated }) => {
  const childArray = React.Children.toArray(children);
  const selectedChild = childArray.find(
    (child) => child.props.value === value
  );

  const displayedValue = selectedChild.props.children;

  return (
    <Wrapper>
      <VisibleLabel>{label}</VisibleLabel>

      <SelectWrapper>
        <NativeSelect {...delegated}>{children}</NativeSelect>

        <DisplayedBit>
          {displayedValue}
          <ChevronIcon id="chevron-down" size={24} strokeWidth={2} />
        </DisplayedBit>
      </SelectWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.label``;

const VisibleLabel = styled.span`
  margin-right: 16px;
`;

const SelectWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const NativeSelect = styled.select`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const DisplayedBit = styled.span`
  display: block;
  font-size: 1rem;
  padding: 12px 52px 12px 16px;
  border-radius: 8px;
  pointer-events: none;
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};

  ${NativeSelect}:focus ~ & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover ~ & {
    color: ${COLORS.black};
  }
`;

const ChevronIcon = styled(Icon)`
  position: absolute;
  top: 0;
  right: 9px;
  bottom: 0;
  margin: auto;
  width: 24px;
  height: 24px;
`;

export default Select;
