import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledLabel,
  StyledInput,
  StyledTogglerSwitch,
} from './TogglerElements.styles';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

export const Label = ({ children, label }) => (
  <StyledLabel htmlFor={label}>{children}</StyledLabel>
);

Label.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
};

export const Input = ({ onChange, isChecked, label }) => (
  <StyledInput
    type="checkbox"
    onChange={onChange}
    checked={isChecked}
    id={label}
  />
);

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  isChecked: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
};

export const TogglerSwitch = ({ isChecked }) => (
  <StyledTogglerSwitch icon={isChecked ? faSun : faMoon} />
);

TogglerSwitch.propTypes = {
  isChecked: PropTypes.bool.isRequired,
};
