import styled from 'styled-components/macro';
import { pxToRem } from '../../../globalStyles/Utils';
import { device } from '../../../globalStyles/Breakpoints';

export const StyledSidebar = styled.div`
  display: none;

  @media ${device.large} {
    width: ${({ theme }) => pxToRem(theme.globalValues.sidebar)};
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.menuBackground};
    border-right: ${pxToRem(1)} solid ${({ theme }) => theme.menuBorder};
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 10;
    padding: ${pxToRem(20)};
    justify-content: space-between;
  }
`;
