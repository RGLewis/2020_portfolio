import React from 'react';
import PropTypes from 'prop-types';
import { StyledLink } from './RichTextFooterLink.styles';

const RichTextFooterLink = ({ children, href, variant }) => (
  <StyledLink
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    variant={variant}
  >
    {children}
  </StyledLink>
);

export default RichTextFooterLink;

RichTextFooterLink.propTypes = {
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

RichTextFooterLink.defaultProps = {
  variant: 'menuFontColor',
};
