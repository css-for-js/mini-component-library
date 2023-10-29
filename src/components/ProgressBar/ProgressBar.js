/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';




const ProgressBar = ({ value, size }) => {
  return (
    <>
      <BarWrapper size={size} role="progressbar"  aria-valuenow={value}>
        <Bar value={value} size={size}/>
      </BarWrapper>
    </>
  );
};

const MaxRange = 100;

const PB_Height = {
  small: '8px',
  medium: '12px',
  large: '24px'
}

const BarBase = styled.div`
  border-radius: 4px;
  width: 370px;
  height: 8px;
`

const BarWrapper = styled(BarBase)`
  margin: 0;
  box-sizing: border-box;
  height: ${p=>PB_Height[p.size]};
   /* height: 10px; */
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  /* border: 8px solid transparent; */
  padding: ${p=>p.size === 'large' ? '4px' : '0px'};
`
const  Bar  = styled(BarBase)`
  border-radius: 4px 0px 0px 4px;
  border-radius: ${p=> {
    if (p.value == MaxRange) { 
      return '4px 4px 4px 4px;' 
    } else if (p.value > 98) {
        return '4px 2px 2px 4px;'
    } 
}}; 
  background-color: ${COLORS.primary};
  height: ${p=>p.size === 'large' ? '16px' : PB_Height[p.size]};
  width: ${p=>p.value+'%'};
`
export default ProgressBar;
