import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const iconSize = {
    small: 16,
    large: 24,
  }[size];

  const Input = {
    small: InputSmall,
    large: InputLarge,
  }[size];

  return (
    <Wrapper style={{ "--width": width + "px" }}>
      <IconWrapper style={{ "--size": iconSize + "px" }}>
        <Icon id={icon} size={iconSize} />
      </IconWrapper>
      <Input placeholder={placeholder} value={label} />
    </Wrapper>
  );
};

export default IconInput;

const Wrapper = styled.div`
  position: relative;
  width: var(--width);
  color: ${COLORS.gray700};
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  height: var(--size);
  width: var(--size);
  margin: auto;
`;

const InputBase = styled.input`
  width: 100%;
  border: none;
  border-color: ${COLORS.black};
  font-weight: 700;
  color: inherit;

  &::placeholder {
    color: ${COLORS.gray500};
  }

  &:focus {
    outline-offset: 2px;
  }

  &:hover {
    color: ${COLORS.black};
  }
`;

const InputSmall = styled(InputBase)`
  border-bottom: 1px solid;
  font-size: ${14 / 16}rem;
  padding: 4px;
  padding-left: 24px;
  line-height: ${16 / 16}rem;
`;

const InputLarge = styled(InputBase)`
  border-bottom: 2px solid;
  font-size: ${18 / 16}rem;
  padding: 7px;
  padding-left: 36px;
  line-height: ${21 / 16}rem;
`;
