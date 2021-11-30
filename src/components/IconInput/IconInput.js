import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    "borderThickness": 1,
    "size": 12,
    "fontSize": (14/16) + "rem",
    "height": 24
  },
  large: {
    "borderThickness": 2,
    "size": 16,
    "fontSize": (18/16) + "rem",
    "height": 36,
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {

  const styles = STYLES[size];
  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{"--size": styles.size + 'px'}}>
        <Icon id={icon} size={styles.size}/>
      </IconWrapper>        
      <Input type="text" placeholder={placeholder} 
      style={{
        "--width": width + "px",
        "--height": styles.height + "px",
        "--font-size": styles.fontSize, 
        "--border-thickness": styles.borderThickness + "px"
      }} />
</Wrapper>
  )
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`

const IconWrapper = styled.div`
  position: absolute;
  top: 0; 
  bottom: 0;
  margin: auto 0;
  height: var(--size);
`;

  const Input = styled.input`
    width: var(--width);
    height: var(--height);
    border: none;  
    border-bottom: var(--border-thickness) solid ${COLORS.black};
    padding-left: var(--height);
    font-weight: 700;
    font-size: var(--fontSize);
    outline-offset: 2px;
    color: inherit; 

    &::placeholder {
      font-weight: 400;
      color: ${COLORS.gray500};
    }
  `

export default IconInput;

