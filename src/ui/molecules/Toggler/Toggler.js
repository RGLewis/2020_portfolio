import React from 'react';
import PropTypes from 'prop-types';
import {
  Label,
  Input,
  TogglerSwitch,
} from '../../atoms/TogglerElements/TogglerElements';
import { TogglerContainer} from './Toggler.styles';
import Body from '../../atoms/Typography/Body'

const Toggler = ({
  onChange,
  isChecked,
  label,
  lightToggleLabel,
  darkToggleLabel,
}) => (
  <TogglerContainer>
    <Label for={label}>
      <Input onChange={onChange} isChecked={isChecked} id={label} />
      <TogglerSwitch isChecked={isChecked}/>
    </Label>
    <Body variant="primaryFont" textTransform="capitalize">{isChecked ? darkToggleLabel : lightToggleLabel}</Body>
  </TogglerContainer>
);

export default Toggler;

Toggler.propTypes = {
  onChange: PropTypes.func.isRequired,
  isChecked: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  lightToggleLabel: PropTypes.string,
  darkToggleLabel: PropTypes.string
}

Toggler.defaultProps = {
  lightToggleLabel: "",
  darkToggleLabel: ""
}