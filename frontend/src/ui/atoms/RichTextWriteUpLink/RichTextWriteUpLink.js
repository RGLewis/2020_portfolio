import React from 'react';
import PropTypes from 'prop-types';
import { StyledLink } from './RichTextWriteUpLink.styles';

const RichTextWriteUpLink = ({ children, href, variant }) => (
  <StyledLink
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    variant={variant}
  >
    {children}
  </StyledLink>
);

export default RichTextWriteUpLink;

RichTextWriteUpLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  variant: PropTypes.oneOf([
    'primaryFont',
    'secondaryFont',
    'contrast',
    'menuFontColor',
    'accent',
    'alert',
  ]),
};

RichTextWriteUpLink.defaultProps = {
  variant: 'primaryFont',
};
