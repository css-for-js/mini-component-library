import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    lineWeight: 1,
    inputLeft: 20,
    inputHeight: 24 / 16,
    iconSize: 16,
    fontSize: 14 / 16,
  },

  large: {
    lineWeight: 2,
    inputLeft: 30,
    inputHeight: 36 / 16,
    iconSize: 24,
    fontSize: 18 / 16,

  },
};

const Label = styled.label`
  display: block;
  position: relative;
  
  &:focus {
    outline: 5px auto black;
  }

`;

const TextInput = styled.input`
  height: var(--input-height);
  border: none;
  border-bottom: 1px solid ${COLORS.black};
  padding-left: var(--input-left);
  font-weight: 700;
  font-size: var(--font-size);
  outline-offset: 1px;
  color: ${COLORS.gray700};
  width: ${props => `${props.width}px`};
  &:hover {
    color: ${COLORS.black}
  }
  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: var(--icon-size);
  height: var(--icon-size);
`;

const IconInput = ({ label, icon, width = 250, size, ...delegated }) => {
  const style = SIZES[size];
  if (!style) {
    throw new Error("Improper style passed");
  }
  return (
    <Label
      style={{
        "--line-weight": style.lineWeight + "px",
        "--input-height": style.inputHeight + "rem",
        "--input-left": style.inputLeft + "px",
        "--font-size": style.fontSize + "rem",
        "--font-weight": style.fontWeight,
        "--icon-size": style.iconSize + "px",
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      <TextInput  type="text" width={width} {...delegated} />
      <IconWrapper>
        <Icon id={icon} size={style.iconSize} />
      </IconWrapper>
    </Label>
  );
};

export default IconInput;
