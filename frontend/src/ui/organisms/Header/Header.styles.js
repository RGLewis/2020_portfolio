import styled from 'styled-components/macro';
import { pxToRem } from '../../../globalStyles/Utils';
import { device } from '../../../globalStyles/Breakpoints';
import { animated } from 'react-spring';

export const HeaderInnerContainer = styled.div`
  width: 100%;
  padding: ${pxToRem(20)};
  position: fixed;
  background: ${({ theme }) => theme.menuBackground};
  z-index: 100;

  @media ${device.large} {
    background: transparent;
    z-index: inherit;
  }
`;

export const HeaderContainer = styled.header``;

export const HeaderTopRowContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${pxToRem(50)};

  @media ${device.large} {
    justify-content: flex-end;
    height: ${pxToRem(50)};
  }
`;

export const HamburgerSpan = styled.span`
  height: ${pxToRem(1)};
  width: ${pxToRem(30)};
  border-bottom: ${pxToRem(4)} solid ${({ theme }) => theme.headerAccent};
  margin: ${pxToRem(3)} auto;
  transition: all 200ms;
  border-radius: ${(props) => (props.menuIsOpen ? 0 : '2px')};

  &:nth-child(1) {
    transform: ${(props) => props.menuIsOpen && 'translateY(10px)'};
  }

  &:nth-child(3) {
    transform: ${(props) => props.menuIsOpen && 'translateY(-10px)'};
  }
`;

export const HamburgerButton = styled.button`
  width: ${pxToRem(50)};
  height: ${pxToRem(50)};
  padding: ${pxToRem(10)};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: transparent;
  border-radius: 50%;
  cursor: pointer;
`;

export const NavContainer = styled(animated.div)`
  margin-top: ${pxToRem(70)};
  padding: ${pxToRem(15)} ${pxToRem(20)} ${pxToRem(20)} ${pxToRem(20)};
  position: fixed;
  z-index: 10;
  background: ${({ theme }) => theme.menuBackground};
  border-bottom: ${({ theme, menuIsOpen }) =>
    menuIsOpen && `${pxToRem(1)} solid ${theme.headerAccent}`};
  left: 0;
  right: 0;
`;
