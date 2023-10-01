/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    "--wrapperHeight": "8px",
    "--innerHeight": "8px",
    "--borderRadius": "4px",
  },
  medium: {
    "--wrapperHeight": "12px",
    "--innerHeight": "12px",
    "--borderRadius": "4px",
  },
  large: {
    "--wrapperHeight": "24px",
    "--innerHeight": "16px",
    "--padding": "4px",
    "--borderRadius": "8px",
  },
}

const ProgressWrapper = styled.div`
  max-width: 370px;
  width: 100%;
  height: var(--wrapperHeight);
  color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: var(--padding);
  border-radius: var(--borderRadius);
  background-color: ${COLORS.transparentGray15};
  `
const ProgressInner = styled(ProgressWrapper)`
  background-color: ${COLORS.primary};
  width: ${props => props.value}%;
  border-radius: ${p => p.value >= 99 ? `4px` : `4px 0 0 4px`};
  height: var(--innerHeight);
`
const ProgressAlt = styled.div`
  progress[value] {
    appearance: none;
    -webkit-appearance: none;
    width: 100%;
    max-width: 370px;

    ::-webkit-progress-bar {
      background-color: ${COLORS.transparentGray15};
      border-radius: var(--borderRadius);
      box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
      height: var(--wrapperHeight);
      padding: var(--padding);
    }
    ::-webkit-progress-value {
      background-color: ${COLORS.primary};
      border-radius: ${p => p.value >= 99 ? `4px` : `4px 0 0 4px`};
      height: var(--innerHeight);
      width: ${props => props.value}%;
    }
  }
  `
const ProgressAlt2 = styled.progress`
  &[value] {
    appearance: none;
    -webkit-appearance: none;
    width: 100%;
    max-width: 370px;

    ::-webkit-progress-bar {
      background-color: ${COLORS.transparentGray15};
      border-radius: var(--borderRadius);
      box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
      height: var(--wrapperHeight);
      padding: var(--padding);
    }
    ::-webkit-progress-value {
      background-color: ${COLORS.primary};
      border-radius: ${p => p.value >= 99 ? `4px` : `4px 0 0 4px`};
      height: var(--innerHeight);
      width: ${props => props.value}%;
    }
  }
  `

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  return <>

    Three different solutions. All work. However, the third appears to be the "simplest".

    <p>First solution - `div` wrapping a `div`</p>
    <ProgressWrapper style={styles} role="progressbar" aria-valuenow={value} >
      <ProgressInner style={styles} value={value} />
    </ProgressWrapper>
    <p>Second solution - `div` wrapping a `progress` element </p>
    <ProgressAlt value={value}>
      <progress style={styles} value={value} max={100} aria-valuenow={value}/>
      </ProgressAlt>
      <div style={{height: '10px'}}></div>
    <p>A "pure" `progress` element. </p>
    <ProgressAlt2 value={value} style={styles} max={100} aria-valuenow={value}/>
    <VisuallyHidden>{value}%</VisuallyHidden>
  </>;
};

export default ProgressBar;
