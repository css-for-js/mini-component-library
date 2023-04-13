/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZE = {
  "L": "24px", 
  "medium": "12px", 
  "small": "8px"
}
const Wrapper  = styled.div`
  background-color: ${COLORS.transparentGray15};
  height: ${props => SIZE[props.size]};
  width: 370px;
  border-radius: 8px;
`
const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper size={size}>

    </Wrapper>
  )
};

export default ProgressBar;
