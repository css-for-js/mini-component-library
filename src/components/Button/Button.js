import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

const SIZE_STYLES = {
  small: {
    '--height': '52px',
    '--padding': '0 24px',
    '--font-size': 18 / 16 + 'rem',
    '--border-radius': '2px',
  },
  medium: {
    '--height': '65px',
    '--padding': '0 36px',
    '--font-size': 21 / 16 + 'rem',
    '--border-radius': '4px',
  },
  large: {
    '--height': '80px',
    '--padding': '0 48px',
    '--font-size': 24 / 16 + 'rem',
    '--border-radius': '6px',
  },
};

const Button = ({ variant, size, children }) => {
  const Component =
    variant === 'fill'
      ? FillButton
      : variant === 'outline'
      ? OutlineButton
      : GhostButton;

  const styles = SIZE_STYLES[size];

  return <Component style={styles}>{children}</Component>;
};

const ButtonBase = styled.button`
  display: block;
  height: var(--height);
  padding: var(--padding);
  font-size: var(--font-size);
  border-radius: var(--border-radius);
  border: none;
  background: transparent;
  text-transform: uppercase;
  outline-offset: 3px;
  box-sizing: border-box;
`;

const FillButton = styled(ButtonBase)`
  background: ${COLORS.primary};
  color: ${COLORS.white};
  outline-color: ${COLORS.primary};

  &:hover {
    background: ${COLORS.primaryLight};
  }
`;

const OutlineButton = styled(ButtonBase)`
  background: ${COLORS.white};
  border: 2px solid ${COLORS.primary};
  color: ${COLORS.primary};
  outline-color: ${COLORS.primary};

  &:hover {
    background: ${COLORS.offwhite};
  }
`;

const GhostButton = styled(ButtonBase)`
  color: ${COLORS.gray};
  outline-color: ${COLORS.gray};

  &:hover {
    background: ${COLORS.transparentGray15};
    color: ${COLORS.black};
  }
`;

export default Button;
