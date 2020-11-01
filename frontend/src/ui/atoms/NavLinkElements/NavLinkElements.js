import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledNavLink,
  StyledHashLink,
} from './NavLinkElements.styles';

export const NavLink = ({ to, children, isExact, onClick }) => (
    <StyledNavLink to={to} exact={isExact} onClick={onClick}>
      {children}
    </StyledNavLink>
);

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  exact: PropTypes.bool,
  onClick: PropTypes.func
}

NavLink.defaultProps = {
  exact: false,
  onClick: () => {}
}

export const HashLink = ({ to, children, isExact, onClick }) => (
  <StyledHashLink smooth to={to} exact={isExact} onClick={onClick}>
    {children}
  </StyledHashLink>
);

HashLink.propTypes = {
to: PropTypes.string.isRequired,
children: PropTypes.node.isRequired,
exact: PropTypes.bool,
onClick: PropTypes.func
}

HashLink.defaultProps = {
exact: false,
onClick: () => {}
}