import React from 'react';
import PropTypes from 'prop-types';
import { StyledFormButton } from './FormButton.styles';

const FormButton = ({ disabled, onClick, type, children }) => {
  return (
    <StyledFormButton type={type} disabled={disabled} onClick={onClick}>
      {children}
    </StyledFormButton>
  );
};

FormButton.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit']),
  children: PropTypes.node.isRequired,
};

FormButton.defaultProps = {
  disabled: false,
  onClick: () => {},
  type: 'button',
};

export default FormButton;