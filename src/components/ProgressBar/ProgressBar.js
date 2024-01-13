/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    height: 8,
    radius: 4,
    padding: 0,
  },
  medium: {
    height: 12,
    radius: 4,
    padding: 0,
  },
  large: {
    height: 16,
    radius: 8,
    padding: 4,
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size]; // small, medium or large

  if (!styles) {
    throw new Error(`Incorrect size provided to ProgressBar: ${size}`);
  }

  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      style={{
        '--radius': styles.radius + 'px',
        '--padding': styles.padding + 'px',
      }}
    >
      <BarWrapper>
        <Bar
          style={{ '--width': value + '%', '--height': styles.height + 'px' }}
        />
      </BarWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-radius: var(--radius);
  padding: var(--padding);
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const BarWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;

const Bar = styled.div`
  background-color: ${COLORS.primary};
  border-radius: 4px 0px 0px 4px;
  height: var(--height);
  width: var(--width);
`;

export default ProgressBar;
