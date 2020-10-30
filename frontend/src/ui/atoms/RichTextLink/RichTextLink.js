import React from 'react';
import PropTypes from 'prop-types';
import {StyledLink} from './RichTextLink.styles'

const RichTextLink = ({children, href, variant}) => (
  <StyledLink href={href} target="_blank" rel="noopener noreferrer" variant={variant}>{children}</StyledLink>
)

export default RichTextLink

RichTextLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primaryFont', 'secondaryFont', 'contrast', 'menuFontColor', 'accent', ]),
}

RichTextLink.defaultProps = {
  variant: 'primaryFont',
}