/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZE = {
  "large": "24px", 
  "medium": "12px", 
  "small": "8px"
}

const STYLES = {
  small: {
    height: 8, 
    padding: 0,
    radius: 4,
  }, 
  medium: {
    height: 12,
    padding: 0,
    radius: 4,
  },
  large : {
    height: 16,
    padding: 4, 
    radius: 8
  }
}
const Wrapper  = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray15};
  border-radius: var(--radius);
  padding: var(--padding);
`
const InnerBar = styled.div`
 height: var(--height);
 background-color: ${COLORS.primary};
 border-radius: 4px 0 0 4px;
 width: var(--width);
`

const BarWrapper = styled.div`
 border-radius: 4px;
  /* Trim off corners when progress bar is near-full. */
  overflow: hidden;
`
const ProgressBar = ({ value = 0, size }) => {
  const styles = STYLES[size];
  if (!styles) {
    throw new Error(`Unknown Size passed to ProgressBar: ${size}`);
  }
  return (
    <Wrapper size={size} role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={{
        '--padding': styles.padding + 'px', 
        '--radius': styles.radius + 'px'
      }}
      >
      <InnerBar size={size} style={{ '--width': value + "%", '--height': styles.height + 'px'}}/>
    </Wrapper>
  )
};

export default ProgressBar;
