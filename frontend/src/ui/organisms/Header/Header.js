import React, { useContext, useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../../../context/context';
import { UseResponsive } from '../../../hooks/useResponsive';
import { useSpring } from 'react-spring';
import {
  HeaderContainer,
  HeaderTopRowContainer,
  HamburgerSpan,
  HamburgerButton,
  NavContainer,
  HeaderInnerContainer,
} from './Header.styles';
import Toggler from '../../molecules/Toggler/Toggler';
import Nav from '../Nav/Nav';

const MobileHeader = ({ navData }) => {
  // define screen width
  const { windowWidth } = UseResponsive();

  // define context
  const context = useContext(Context);

  // define nav ref
  const navRef = useRef();

  // hooks
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [navHeight, setNavHeight] = useState(1000); // high number to start, until height is set on useEffect

  // get nav height
  /* Calculate the heights of the title and the vehicle containers for finding the sticky position */
  useEffect(() => {
    //title is animated last so check heights when it starts animation
    if (navRef.current) {
      const navRect = navRef.current.getBoundingClientRect();

      setNavHeight(navRect.height + 200); // 200px extra, just to be safe
    }
  }, [windowWidth, navHeight]);

  const toggleMenuState = () => {
    setMenuIsOpen((prevState) => !prevState);
  };

  // define animation
  const animateNav = useSpring({
    config: { mass: 2, tension: 280, friction: 100 },
    to: {
      top: menuIsOpen ? '0' : `-${navHeight}px`,
    },
  });

  return (
    <HeaderContainer>
      <HeaderInnerContainer>
        <HeaderTopRowContainer>
          <HamburgerButton
            onClick={toggleMenuState}
            aria-label={menuIsOpen ? 'Close Menu' : 'Open Menu'}
          >
            <HamburgerSpan menuIsOpen={menuIsOpen} />
            <HamburgerSpan menuIsOpen={menuIsOpen} />
            <HamburgerSpan menuIsOpen={menuIsOpen} />
          </HamburgerButton>

          <Toggler
            onChange={() => {
              context.toggleLightMode();
            }}
            label="colorMode"
            isChecked={!context.isLightMode}
            lightToggleLabel="light"
            darkToggleLabel="dark"
          />
        </HeaderTopRowContainer>
      </HeaderInnerContainer>

      <NavContainer
        ref={navRef}
        id="navContainer"
        style={animateNav}
        menuisopen={menuIsOpen ? 'true' : 'false'}
      >
        <Nav data={navData} toggleMenuState={toggleMenuState} />
      </NavContainer>
    </HeaderContainer>
  );
};

export default MobileHeader;

MobileHeader.propTypes = {
  navData: PropTypes.shape({
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    fetchedData: PropTypes.shape({
      navigation: PropTypes.shape({
        ctAsCollection: PropTypes.shape({
          items: PropTypes.array,
        }),
        headline: PropTypes.string,
        subHeading: PropTypes.string,
        title: PropTypes.string,
      }),
    }),
  }).isRequired,
};

MobileHeader.defaultProps = {
  navData: { error: undefined, fetchedData: undefined },
};
