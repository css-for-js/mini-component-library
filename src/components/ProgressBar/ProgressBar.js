import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

const STYLES = {
  small: {
    barHeight: 8,
    containerHeight: 8,
    containerRadius: 4,
  },
  medium: {
    barHeight: 12,
    containerHeight: 12,
    containerRadius: 4,
  },
  large: {
    barHeight: 16,
    containerHeight: 24,
    containerRadius: 8,
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = STYLES[size];

  if (!styles) {
    throw new Error(`Unrecognized size in ProgressBar: ${size}`);
  }

  const padding = (styles.containerHeight - styles.barHeight) / 2;

  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={{
        '--barHeight': styles.barHeight + 'px',
        '--containerRadius': styles.containerRadius + 'px',
        '--containerPadding': padding + 'px',
      }}
    >
      <BarWrapper>
        <Bar style={{ '--width': value + '%' }} />
      </BarWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--containerRadius);
  padding: var(--containerPadding);
`;

const BarWrapper = styled.div`
  border-radius: 4px;
  /* Trim the corners off of the Bar child */
  overflow: hidden;
`;

const Bar = styled.div`
  width: var(--width);
  height: var(--barHeight);
  background: ${COLORS.primary};
`;

export default ProgressBar;
