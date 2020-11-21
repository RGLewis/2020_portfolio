import React, { useContext } from 'react';
import { Context } from '../../../context/context';
import PropTypes from 'prop-types';
import { StyledNavLink, StyledHashLink } from './NavLinkElements.styles';

export const NavLink = ({
  to,
  children,
  isExact,
  onClick,
  toggleMenuState,
}) => {
  // define context
  const context = useContext(Context);

  const handleOnLinkClick = () => {
    onClick();

    // if user is clicking directly on experience link, clear the active section
    if (to === '/experience') {
      context.setExperienceSection();
    }

    if (to !== '/experience') {
      toggleMenuState();
    }
  };

  return (
    <StyledNavLink to={to} exact={isExact} onClick={handleOnLinkClick}>
      {children}
    </StyledNavLink>
  );
};

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  exact: PropTypes.bool,
  onClick: PropTypes.func,
  toggleMenuState: PropTypes.func,
};

NavLink.defaultProps = {
  exact: false,
  onClick: () => {},
  toggleMenuState: () => {},
};

export const HashLink = ({
  to,
  children,
  onClick,
  isActive,
  toggleMenuState,
}) => {
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
    toggleMenuState();
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

HashLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  toggleMenuState: PropTypes.func,
};

HashLink.defaultProps = {
  isActive: false,
  onClick: () => {},
  toggleMenuState: () => {},
};
