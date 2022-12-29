/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    "--width": 370 + "px",
    "--height": 8 + "px",
    "--border-radius": 4 + "px",
    "--padding": 0 + "px",
  },
  medium: {
    "--width": 370 + "px",
    "--height": 12 + "px",
    "--border-radius": 4 + "px",
    "--padding": 0 + "px",
  },
  large: {
    "--width": 370 + "px",
    "--height": 24 + "px",
    "--border-radius": 8 + "px",
    "--padding": 4 + "px",
  }
}


const Container = styled.div`
  background-color: ${COLORS.transparentGray15};
  height: var(--height);
  border-radius: var(--border-radius);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: var(--padding);
`

const ProgressWrapper = styled.div`
  overflow: hidden;
  border-radius: 4px;
  height: 100%;
`

const Progress = styled.div`
  background-color: ${COLORS.primary};
  width: ${p => p.value + "%"};
  border-radius: 4px 0 0 4px;
  height: 100%;
`

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size]
  return (
    <Container style={styles} size={size}>
      <ProgressWrapper>
        <VisuallyHidden>{value}%</VisuallyHidden>
        <Progress style={styles} value={value}/>
      </ProgressWrapper>
    </Container>
  )
};

export default ProgressBar;
