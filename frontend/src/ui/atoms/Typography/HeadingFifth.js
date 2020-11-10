import React from 'react';
import PropTypes from 'prop-types';
import { StyledHeadingFifth } from './Typography.styles';

const HeadingFifth = ({ children, variant }) => (
  <StyledHeadingFifth variant={variant}>{children}</StyledHeadingFifth>
);

HeadingFifth.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    'primaryFont',
    'secondaryFont',
    'contrast',
    'menuFontColor',
    'accent',
  ]),
};

HeadingFifth.defaultProps = {
  variant: 'primaryFont',
};

export default HeadingFifth;
