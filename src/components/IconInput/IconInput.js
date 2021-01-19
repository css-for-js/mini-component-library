import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';

const STYLES = {
  small: {
    lineThickness: 1,
    fontSize: 14,
    iconSize: 16,
    height: 24,
  },
  large: {
    lineThickness: 2,
    fontSize: 18,
    iconSize: 24,
    height: 36,
  },
};

const IconInput = ({ icon, width = 250, size, ...delegated }) => {
  const styles = STYLES[size];

  if (!styles) {
    throw new Error(`Unrecognized size in IconInput: ${size}`);
  }

  return (
    <Wrapper style={{ '--width': width + 'px' }}>
      <SearchIcon
        id={icon}
        strokeWidth={styles.lineThickness}
        size={styles.iconSize}
      />
      <TextInput
        type="text"
        style={{
          '--underline-thickness': styles.lineThickness + 'px',
          '--font-size': styles.fontSize / 16 + 'rem',
          '--height': styles.height + 'px',
        }}
        {...delegated}
      />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};
  width: var(--width);

  &:hover {
    color: ${COLORS.black};
  }
`;

const TextInput = styled.input`
  display: block;
  position: relative;
  border: none;
  background: transparent;
  border-bottom: var(--underline-thickness) solid ${COLORS.black};
  padding-left: var(--height);
  width: 100%;
  height: var(--height);
  font-size: var(--font-size);
  color: inherit;
  outline-offset: 2px;

  &::placeholder {
    color: ${COLORS.gray500};
  }
`;

const SearchIcon = styled(Icon)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  margin: auto;
`;

export default IconInput;
