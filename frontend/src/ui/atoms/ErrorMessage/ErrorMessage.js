import React from 'react';
import PropTypes from 'prop-types';
import { StyledErrorMessage } from './ErrorMessage.styles';

const ErrorMessage = ({ isShowing, children }) => (
  <StyledErrorMessage isAlert isShowing={isShowing}>
    {children}
  </StyledErrorMessage>
);

export default ErrorMessage;
