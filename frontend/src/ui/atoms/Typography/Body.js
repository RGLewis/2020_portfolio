import React from 'react';
import PropTypes from 'prop-types';
import { StyledBody } from './Typography.styles';

const Body = ({
  children,
  isBold,
  marginBottom,
  variant,
  isCentered,
  isSmall,
  isLarge,
  textTransform,
}) => (
  <StyledBody
    isBold={isBold}
    marginBottom={marginBottom}
    variant={variant}
    isCentered={isCentered}
    isSmall={isSmall}
    isLarge={isLarge}
    textTransform={textTransform}
  >
    {children}
  </StyledBody>
);

export default Body;

Body.propTypes = {
  children: PropTypes.node.isRequired,
  isBold: PropTypes.bool,
  marginBottom: PropTypes.bool,
  variant: PropTypes.oneOf([
    'primaryFont',
    'secondaryFont',
    'contrast',
    'white',
    'accent',
    'background',
    'alert',
  ]),
  isCentered: PropTypes.bool,
  isSmall: PropTypes.bool,
  isLarge: PropTypes.bool,
  textTransform: PropTypes.oneOf(['capitalize', 'uppercase', 'none']),
};

Body.defaultProps = {
  isBold: false,
  marginBottom: false,
  variant: 'primaryFont',
  isCentered: false,
  isSmall: false,
  isLarge: false,
  textTransform: 'none',
};
