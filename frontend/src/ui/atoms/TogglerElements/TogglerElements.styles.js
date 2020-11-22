import styled from 'styled-components/macro';
import { pxToRem } from '../../../globalStyles/Utils';
import { device } from '../../../globalStyles/Breakpoints';
import { transition } from '../../../globalStyles/Mixins';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StyledLabel = styled.label`
  position: relative;
  width: ${pxToRem(50)};
  height: ${pxToRem(50)};
`;

export const StyledTogglerSwitch = styled(FontAwesomeIcon)`
  position: absolute;
  cursor: pointer;
  top: ${pxToRem(-3)};
  left: 0;
  right: 0;
  bottom: 0;
  color: ${({ theme }) => theme.headerAccent};
  font-size: ${pxToRem(50)};
  padding: ${pxToRem(5)};
  border: ${pxToRem(1)} solid transparent;
  ${transition('all', '100ms', 'ease', '0s')};

  @media ${device.large} {
    color: ${({ theme }) => theme.accent};
  }
`;

export const StyledInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:focus + ${StyledTogglerSwitch} {
    border-color: ${({ theme }) => theme.accent};
    border-radius: 50%;
  }
`;
