import React from 'react';
import PropTypes from 'prop-types';
import { StyledErrorBody } from './Typography.styles';

const ErrorBody = ({ children, variant }) => (
  <StyledErrorBody variant={variant}>{children}</StyledErrorBody>
);

export default ErrorBody;

ErrorBody.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    'primaryFont',
    'secondaryFont',
    'contrast',
    'white',
    'accent',
    'background',
    'alert',
  ]),
};

ErrorBody.defaultProps = {
  variant: 'alert',
};
