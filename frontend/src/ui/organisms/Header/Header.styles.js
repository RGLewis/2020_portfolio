import styled from 'styled-components/macro';
import { pxToRem } from '../../../globalStyles/Utils';
import { device } from '../../../globalStyles/Breakpoints';

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  padding: ${pxToRem(20)};
  position: fixed;

  /* account for sidebar */
  @media ${device.large} {
    justify-content: flex-end;
  }
`;
