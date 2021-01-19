import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return 'TODO';
};

export default Select;
