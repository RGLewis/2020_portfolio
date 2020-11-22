import React from 'react';
import PropTypes from 'prop-types';
import { StyledFormButton } from './FormButton.styles';

const FormButton = ({
  disabled,
  onClick,
  type,
  children,
  formResponseLoading,
}) => {
  return (
    <StyledFormButton
      type={type}
      disabled={disabled}
      onClick={onClick}
      formResponseLoading={formResponseLoading}
    >
      {children}
    </StyledFormButton>
  );
};

export default FormButton;

FormButton.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit']),
  children: PropTypes.node.isRequired,
  formResponseLoading: PropTypes.bool.isRequired,
};

FormButton.defaultProps = {
  disabled: false,
  onClick: () => {},
  type: 'button',
};
