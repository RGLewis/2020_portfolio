import styled from 'styled-components/macro';
import { pxToRem } from '../../../globalStyles/Utils';
import { transition } from '../../../globalStyles/Mixins';

export const StyledLink = styled.a`
  color: ${({ theme, variant }) => theme[variant]};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: ${pxToRem(2)};
    bottom: 0;
    left: 0;
    background-color: ${({ theme }) => theme.menuFontColor};
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    ${transition('all', '300ms', 'ease-in-out', '0s')};
  }

  &:hover {
    &::before {
      visibility: visible;
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
    }
  }
`;
