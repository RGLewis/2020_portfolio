import React from 'react';
import PropTypes from 'prop-types';
import {
  Label,
  Input,
  TogglerSwitch,
} from '../../atoms/TogglerElements/TogglerElements';
import { TogglerContainer } from './Toggler.styles';

const Toggler = ({ onChange, isChecked, label, fixed }) => (
  <TogglerContainer fixed={fixed}>
    <Label for={label}>
      <Input onChange={onChange} isChecked={isChecked} id={label} />
      <TogglerSwitch isChecked={isChecked} />
    </Label>
  </TogglerContainer>
);

export default Toggler;

Toggler.propTypes = {
  onChange: PropTypes.func.isRequired,
  isChecked: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  fixed: PropTypes.bool,
};

Toggler.defaultProps = {
  fixed: false,
};
