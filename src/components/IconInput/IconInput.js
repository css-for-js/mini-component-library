import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    lineWeight: 1,
    inputLeft: 20,
    iconSize: 16,
    fontSize: 14 / 16,
    fontWeight: 400,
  },

  large: {
    lineWeight: 2,
    inputLeft: 30,
    iconSize: 24,
    fontSize: 18 / 16,
    fontWeight: 700,
  },
};

const Wrapper = styled.div`
  border-left: 0;
  border-top: 0;
  border-right: 0;
  border-bottom: var(--line-weight) solid ${COLORS.black};
  position: relative;

  &:focus {
    outline: 5px auto black;
  }
`;

const Input = styled.input`
  position: absolute;
  left: var(--input-left);
  bottom: 0;
  right: 0%;
  outline: none;
  font-weight: var(--font-weight);
  border: none;
  font-size: var(--font-size);
`;

const IconWrapper = styled(Icon)`
  width: var(--icon-size);
  height: var(--icon-size);
  padding-bottom: 4px;
`;

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const style = SIZES[size];
  if (!style) {
    throw new Error("Improper style passed");
  }
  return (
    <Wrapper
      style={{
        "--line-weight": style.lineWeight + "px",
        "--input-left": style.inputLeft + "px",
        "--font-size": style.fontSize + "rem",
        "--font-weight": style.fontWeight,
        "--icon-size": style.iconSize,
      }}
    >
      <IconWrapper id={icon} size={style.iconSize} />
      <Input type="text" />
    </Wrapper>
  );
};

export default IconInput;
