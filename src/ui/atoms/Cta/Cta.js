import React from 'react';
import PropTypes from 'prop-types';
import {StyledFontAwesomeIcon, CtaButton, CtaLink, CtaContainer} from './Cta.styles'
// import two options for icons
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Cta = ({isButton, children, hasCaret, icon, ariaLabel, iconLeads, onClick, variant, to, paddingBottom}) => isButton ? (
  <CtaContainer paddingBottom={paddingBottom}>
    {console.log(icon)}
    <CtaButton onClick={onClick} variant={variant}>
      {/* If the icon is before the children */}
      {hasCaret && iconLeads && <StyledFontAwesomeIcon icon={faChevronLeft} variant={variant} aria-label={ariaLabel} iconLeads={iconLeads}/>}

      {/* Children */}
      {children}

      {/* if the icon is after the children */}
      {hasCaret && !iconLeads && <StyledFontAwesomeIcon icon={faChevronRight} variant={variant} aria-label={ariaLabel} iconLeads={iconLeads}/>}
    </CtaButton>
  </CtaContainer> )
  : 
  (<CtaContainer paddingBottom={paddingBottom}>
    <CtaLink to={to} variant={variant}>
      {/* If the icon is before the children */}
      {hasCaret && iconLeads && <StyledFontAwesomeIcon icon={faChevronLeft} variant={variant} aria-label={ariaLabel} iconLeads={iconLeads}/>}

      {/* Children */}
      {children}

      {/* if the icon is after the children */}
      {hasCaret && !iconLeads && <StyledFontAwesomeIcon icon={faChevronRight} variant={variant} aria-label={ariaLabel} iconLeads={iconLeads}/>}
    </CtaLink>
  </CtaContainer>
)

export default Cta;

Cta.propTypes = {
  isButton: PropTypes.bool,
  children: PropTypes.node.isRequired,
  hasCaret: PropTypes.bool,
  ariaLabel: PropTypes.string,
  iconLeads: PropTypes.bool,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primaryFont', 'secondaryFont', 'contrast', 'menuFontColor', 'accent', ]),
  to: PropTypes.string,
  paddingBottom: PropTypes.bool
}

Cta.defaultProps = {
  isButton: true,
  hasCaret: false,
  ariaLabel: undefined,
  iconLeads: true,
  onClick: () => {},
  variant: 'contrast',
  to: undefined,
  paddingBottom: true
}