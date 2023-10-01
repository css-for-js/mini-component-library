import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    iconSize: 16 + "px",
    "--textOffset": 16 + 8 + "px",
    "--height": 24 + "px",
    "--iconTopOffset": (24 - 16) / 2 + "px",
    "--fontSize": 1 + "em",
  },
  large: {
    iconSize: 24 + "px",
    "--textOffset": 24 + 8 + "px",
    "--height": 36 + "px",
    "--iconTopOffset": (36 - 24) / 2 + "px",
    "--fontSize": 1.3125 + "em",
  },
};

const Input = styled.input`
  appearance: none;
  border: none;
  border-bottom: 1px solid ${COLORS.black};
  width: ${(p) => p.width}px;
  height: var(--height);
  padding-left: var(--textOffset);
  outline-offset: 2px;

  font-size: var(--fontSize);
  font-weight: 700;
  color: ${COLORS.gray700};

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;
const IconWrapper = styled(Icon)`
  position: absolute;
  left: 0;
  top: var(--iconTopOffset);
  pointer-events: none;
  color: ${COLORS.gray700};
`;

const Wrapper = styled.div`
  position: relative;
  :hover {
    ${IconWrapper}, ${Input} {
      color: ${COLORS.black};
    }
  }
`;
const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const styles = SIZES[size];
  return (
    <>
    <Wrapper>
      {icon && <IconWrapper style={styles} size={styles.iconSize} id={icon} />}
      <Input width={width} style={styles} placeholder={placeholder} />
    </Wrapper>
    <VisuallyHidden>{label}</VisuallyHidden>
    </>
  );
};

export default IconInput;
