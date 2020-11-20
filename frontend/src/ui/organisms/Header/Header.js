import React, { useContext, useState } from 'react';
import { Context } from '../../../context/context';
import {
  HeaderContainer,
  HeaderTopRowContainer,
  HamburgerSpan,
  HamburgerButton,
} from './Header.styles';
import Toggler from '../../molecules/Toggler/Toggler';
import { UseResponsive } from '../../../hooks/useResponsive';

const Header = () => {
  const context = useContext(Context);

  const { windowWidth } = UseResponsive();
  const isDesktop = windowWidth >= 992;

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <HeaderContainer>
      <HeaderTopRowContainer>
        {!isDesktop && (
          <HamburgerButton
            onClick={() => setMenuIsOpen((prevState) => !prevState)}
          >
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
    </HeaderContainer>
  );
};

export default Header;
