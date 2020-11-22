import React, { useContext, useState, useRef, useEffect } from 'react';
import { Context } from '../../../context/context';
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
import { UseResponsive } from '../../../hooks/useResponsive';
import Nav from '../Nav/Nav';

const Header = ({ navData }) => {
  const context = useContext(Context);
  const navRef = useRef(0);

  const { windowWidth } = UseResponsive();
  const isDesktop = windowWidth >= 992;

  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [navHeight, setNavHeight] = useState(0);

  // get nav height
  /* Calculate the heights of the title and the vehicle containers for finding the sticky position */
  useEffect(() => {
    //title is animated last so check heights when it starts animation
    if (navRef.current) {
      const navRect = navRef.current.getBoundingClientRect();

      setNavHeight(navRect.height + 100);
    }
  }, [windowWidth, navHeight, navData]);

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
          {!isDesktop && (
            <HamburgerButton onClick={toggleMenuState}>
              <HamburgerSpan menuIsOpen={menuIsOpen} />
              <HamburgerSpan menuIsOpen={menuIsOpen} />
              <HamburgerSpan menuIsOpen={menuIsOpen} />
            </HamburgerButton>
          )}

          <Toggler
            onChange={() => {
              context.toggleLightMode();
            }}
            label={'colorMode'}
            isChecked={!context.isLightMode}
            lightToggleLabel="light"
            darkToggleLabel="dark"
          />
        </HeaderTopRowContainer>
      </HeaderInnerContainer>
      {!isDesktop && (
        <NavContainer ref={navRef} style={animateNav} menuIsOpen={menuIsOpen}>
          <Nav data={navData} toggleMenuState={toggleMenuState} />
        </NavContainer>
      )}
    </HeaderContainer>
  );
};

export default Header;
