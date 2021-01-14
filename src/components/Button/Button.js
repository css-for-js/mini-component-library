import React from 'react';
import styled from 'styled-components';

const FONT_SIZES = {
  small: 18 / 16 + 'rem',
  medium: 21 / 16 + 'rem',
  large: 24 / 16 + 'rem',
};
const PADDINGS = {
  small: '16px 24px',
  medium: '20px 36px',
  large: '26px 48px',
};

const Button = ({ type, size, children }) => {
  return (
    <ButtonBase
      style={{
        '--font-size': FONT_SIZES[size],
        '--padding': PADDINGS[size],
      }}
    >
      hi
    </ButtonBase>
  );
};

const ButtonBase = styled.button`
  font-size: var(--font-size);
  padding: var(--padding);
`;

export default Button;
