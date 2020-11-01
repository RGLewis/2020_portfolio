import styled from 'styled-components/macro';
import { pxToRem } from '../../../globalStyles/Utils';

export const TogglerContainer = styled.div`
  width: ${pxToRem(50)};
  height: ${pxToRem(50)};
  border-radius: 50%;
  background: ${({ theme }) => theme.backgroundOpaque};
  z-index: 20;
  position: fixed;
`;
