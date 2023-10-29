/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';




const ProgressBar = ({ value, size }) => {
  if(!styles[size]) {
    throw new Error(`Unknown size passed to ProgressBar: ${size}`);
  }
  return ( 
    <Wrapper style={
      {
        '--padding': styles[size].padding + 'px', 
        '--radius': styles[size].radius + 'px',
      }}>
      <Mask style={{'--radius': styles[size].radius + 'px'}}>
        <Bar style={{'--width': value + '%', '--height': styles[size].height + 'px'}} role="progressbar"  aria-valuenow={value} aria-valuemin={0}>
          <VisuallyHidden>{value}</VisuallyHidden>
        </Bar>
      </Mask>
    </Wrapper>
  );
};


const styles = {
  large: {
    height: 16,
    padding: 4, 
    radius: 8,
  },
  medium: {
    height: 12,
    padding: 0,
    radius: 4,
  },
  small: {
    height: 8,
    padding: 0,
    radius: 4,
  }
}

const Wrapper = styled.div`
  border-radius: var(--radius);
  width:370px;
  box-shadow: 0px 2px 4px 0px rgba(128, 128, 128, 0.35) inset;
  height: var(--height); 
  /* overflow to clip progress bar and make it rounded at more than 99% */
  padding: var(--padding);
  
  `

// Wraps progress bar and for large sizes adds rounded corners
const Mask = styled.div`
  border-radius: 4px;
  overflow: hidden;
`

const Bar = styled.div`
  border-radius: 4px 0 0 4px;
  width: var(--width);
  height: var(--height);
  background-color: ${COLORS.primary};
`




// const MaxRange = 100;

// const PB_Height = {
//   small: '8px',
//   medium: '12px',
//   large: '24px'
// }

// const BarBase = styled.div`
//   border-radius: 4px;
//   width: 370px;
//   height: 8px;
// `

// const BarWrapper = styled(BarBase)`
//   margin: 0;
//   box-sizing: border-box;
//   height: ${p=>PB_Height[p.size]};
//    /* height: 10px; */
//   box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
//   /* border: 8px solid transparent; */
//   padding: ${p=>p.size === 'large' ? '4px' : '0px'};
// `
// const  Bar  = styled(BarBase)`
//   border-radius: 4px 0px 0px 4px;
//   border-radius: ${p=> {
//     if (p.value == MaxRange) { 
//       return '4px 4px 4px 4px;' 
//     } else if (p.value > 98) {
//         return '4px 2px 2px 4px;'
//     } 
// }}; 
//   background-color: ${COLORS.primary};
//   height: ${p=>p.size === 'large' ? '16px' : PB_Height[p.size]};
//   width: ${p=>p.value+'%'};
// `
export default ProgressBar;
