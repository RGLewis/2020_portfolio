import styled from 'styled-components/macro';
import { pxToRem } from '../../../globalStyles/Utils';
import { device } from '../../../globalStyles/Breakpoints';
import { NavLink } from 'react-router-dom';
import { transition } from '../../../globalStyles/Mixins';

export const StyledNavLink = styled(NavLink)`
  font-size: ${pxToRem(20)};
  color: ${({ theme }) => theme.menuFontColor};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  padding: ${pxToRem(5)};
  border: 1px solid transparent;
  letter-spacing: ${pxToRem(2)};
  text-transform: uppercase;
  ${transition('all', '200ms', 'ease', '0s')};

  &.active {
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    @media ${device.large} {
      letter-spacing: ${pxToRem(3)};
    }
  }

  &:hover {
    @media ${device.large} {
      letter-spacing: ${pxToRem(3)};
    }
  }

  &:focus,
  &:active {
    border-color: ${({ theme }) => theme.menuFontColor};
  }

  @media ${device.large} {
    font-size: ${pxToRem(50)};
  }
`;

export const StyledHashLink = styled.a`
  font-size: ${pxToRem(20)};
  color: ${({ theme }) => theme.menuFontColor};
  padding: ${pxToRem(5)};
  font-weight: ${({ theme, isActive }) =>
    isActive ? theme.fontWeights.medium : theme.fontWeights.regular};
  padding: ${pxToRem(5)};
  border: 1px solid transparent;
  border-bottom-color: ${({ theme, isActive }) =>
    isActive && theme.menuFontColor};
  letter-spacing: ${(props) => (props.isActive ? pxToRem(3) : pxToRem(2))};
  text-transform: uppercase;
  ${transition('all', '200ms', 'ease', '0s')};

  &:hover {
    @media ${device.large} {
      letter-spacing: ${pxToRem(3)};
    }
  }

  &:focus,
  &:active {
    border-color: ${({ theme }) => theme.menuFontColor};
  }

  @media ${device.large} {
    font-size: ${pxToRem(50)};
  }
`;
