import React from 'react';
import PropTypes from 'prop-types';
import { StyledErrorBody } from './Typography.styles';

const ErrorBody = ({ children, variant }) => (
  <StyledErrorBody variant={variant}>{children}</StyledErrorBody>
);

ErrorBody.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    'primaryFont',
    'secondaryFont',
    'contrast',
    'menuFontColor',
    'accent',
    'background',
    'alert',
  ]),
};

ErrorBody.defaultProps = {
  variant: 'alert',
};

export default ErrorBody;
