import styled from 'styled-components/macro';
import { pxToRem } from '../../../globalStyles/Utils';
import {device} from '../../../globalStyles/Breakpoints'
import { NavLink} from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

export const StyledNavLinkContainer = styled.li`
  padding: ${pxToRem(5)};
  margin-left: ${pxToRem(5)};
  cursor: pointer;
`;

export const StyledNavLink = styled(NavLink)`
  font-size: ${pxToRem(20)};
  color: ${({ theme }) => theme.menuFontColor};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  padding: ${pxToRem(5)};
  border: 1px solid transparent;
  letter-spacing: ${pxToRem(2)};
  text-transform: uppercase;

  &.active {
    border-bottom-color: ${({ theme }) => theme.menuFontColor};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
  }

  @media ${device.large} {
    font-size: ${pxToRem(35)};
  }
`;

export const StyledHashLink = styled(NavHashLink)`
    font-size: ${pxToRem(20)};
  color: ${({ theme }) => theme.menuFontColor};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  padding: ${pxToRem(5)};
  border: 1px solid transparent;
  letter-spacing: ${pxToRem(2)};
  text-transform: uppercase;

  &.active {
    border-bottom-color: ${({ theme }) => theme.menuFontColor};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
  }

  @media ${device.large} {
    font-size: ${pxToRem(35)};
  }
`;

export const StyledNavLinkListContainer = styled.ul`
  display: flex;
  flex-direction: row;

  @media ${device.large} {
    flex-direction: column
  }
`;