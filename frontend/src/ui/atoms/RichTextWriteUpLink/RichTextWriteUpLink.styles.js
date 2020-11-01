import styled from 'styled-components/macro';
import { pxToRem } from '../../../globalStyles/Utils';
import { transition } from '../../../globalStyles/Mixins';

export const StyledLink = styled.a`
  position: relative;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme, variant }) => theme[variant]};
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.accent} 0%,
    ${({ theme }) => theme.accent} 100%
  );
  background-position: 0 100%;
  background-repeat: repeat-x;
  background-size: ${pxToRem(4)} ${pxToRem(4)};
  ${transition('all', '200ms', 'ease-in-out', '0s')};
  ${transition('all', '200ms', 'ease-in-out', '0s')};

  &:hover {
    color: ${({ theme }) => theme.background};
    background-size: ${pxToRem(4)} ${pxToRem(50)};
  }
`;
