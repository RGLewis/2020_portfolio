import React from 'react';
import PropTypes from 'prop-types';
import { StyledHeadingThird } from './Typography.styles';

const HeadingThird = ({ children, variant }) => (
  <StyledHeadingThird variant={variant}>{children}</StyledHeadingThird>
);

export default HeadingThird;

HeadingThird.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    'primaryFont',
    'secondaryFont',
    'contrast',
    'menuFontColor',
    'accent',
  ]),
};

HeadingThird.defaultProps = {
  variant: 'primaryFont',
};
