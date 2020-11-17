import React from 'react';
import PropTypes from 'prop-types';
import { StyledNavLink, StyledHashLink } from './NavLinkElements.styles';

export const NavLink = ({ to, children, isExact, onClick }) => (
  <StyledNavLink to={to} exact={isExact} onClick={onClick}>
    {children}
  </StyledNavLink>
);

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  exact: PropTypes.bool,
  onClick: PropTypes.func,
};

NavLink.defaultProps = {
  exact: false,
  onClick: () => {},
};

export const HashLink = ({ to, children, onClick, isActive }) => {
  const splitString = to.split('#');

  // the second element in the array
  const id = splitString[1].toLowerCase();

  const scrollTo = (e) => {
    // prevent default scroll
    e.preventDefault();

    // run smooth scroll
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });

    // update url
    window.history.pushState(id.toUpperCase(), id.toUpperCase(), to);
  };

  const onLinkClick = (e) => {
    scrollTo(e);
    onClick();
  };

  return (
    <StyledHashLink
      href={to}
      onClick={(e) => {
        onLinkClick(e);
      }}
      isActive={isActive}
    >
      {children}
    </StyledHashLink>
  );
};
