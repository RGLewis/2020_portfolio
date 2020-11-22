import styled from 'styled-components/macro';
import { pxToRem } from '../../../globalStyles/Utils';
import { device } from '../../../globalStyles/Breakpoints';
import { NavLink } from 'react-router-dom';
import { transition } from '../../../globalStyles/Mixins';

export const StyledNavLink = styled(NavLink)`
  font-size: ${pxToRem(20)};
  color: ${({ theme }) => theme.menuFontColor};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  padding: 0 ${pxToRem(10)};
  letter-spacing: ${pxToRem(2)};
  text-transform: uppercase;
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.menuFontColor} 0%,
    ${({ theme }) => theme.menuFontColor} 100%
  );
  background-position: 0 100%;
  background-repeat: repeat-x;
  background-size: ${pxToRem(0)} ${pxToRem(0)};
  ${transition('all', '200ms', 'ease-in-out', '0s')};

  &.active {
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    color: ${({ theme }) => theme.menuBackground};
    background-size: ${pxToRem(60)} ${pxToRem(60)};
  }

  &:hover {
    color: ${({ theme }) => theme.menuBackground};
    background-size: ${pxToRem(10)} ${pxToRem(60)};
  }

  @media ${device.large} {
    font-size: ${pxToRem(50)};
  }
`;

export const StyledHashLink = styled.a`
  font-size: ${pxToRem(20)};
  color: ${({ theme, isActive }) =>
    isActive ? theme.menuBackground : theme.menuFontColor};
  padding: ${pxToRem(5)};
  font-weight: ${({ theme, isActive }) =>
    isActive ? theme.fontWeights.medium : theme.fontWeights.regular};
  padding: 0 ${pxToRem(10)};
  text-transform: uppercase;
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.menuFontColor} 0%,
    ${({ theme }) => theme.menuFontColor} 100%
  );
  background-position: 0 100%;
  background-repeat: repeat-x;
  background-size: ${pxToRem(0)} ${pxToRem(0)};
  background-size: ${(props) => props.isActive && pxToRem(60)};
  ${transition('all', '200ms', 'ease-in-out', '0s')};

  &:hover {
    color: ${({ theme }) => theme.menuBackground};
    background-size: ${pxToRem(10)} ${pxToRem(60)};
  }

  @media ${device.large} {
    font-size: ${pxToRem(50)};
  }
`;
