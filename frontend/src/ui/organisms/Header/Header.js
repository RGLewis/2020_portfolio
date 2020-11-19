import React, { useContext } from 'react';
import { Context } from '../../../context/context';
import { HeaderContainer} from './Header.styles';
import Toggler from '../../molecules/Toggler/Toggler';

const Header = () => {
  const context = useContext(Context);
  return (
    <HeaderContainer>
      <Toggler
        onChange={() => {
          context.toggleLightMode();
        }}
        label={'colorMode'}
        isChecked={!context.isLightMode}
        lightToggleLabel="light"
        darkToggleLabel="dark"
      />
    </HeaderContainer>
  );
};

export default Header;
