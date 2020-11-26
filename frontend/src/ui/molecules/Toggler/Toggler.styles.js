import styled from 'styled-components/macro';
import { pxToRem } from '../../../globalStyles/Utils';
import { device } from '../../../globalStyles/Breakpoints';

export const TogglerContainer = styled.div`
  width: ${pxToRem(50)};
  height: ${pxToRem(50)};
  border-radius: 50%;
  background: transparent;
  z-index: 20;
  position: ${(props) => props.fixed && 'fixed'};

  @media ${device.large} {
    background: ${({ theme }) => theme.backgroundOpaque};
  } ;
`;
