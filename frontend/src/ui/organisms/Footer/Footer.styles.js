import styled from 'styled-components/macro';
import { device } from '../../../globalStyles/Breakpoints';
import { pxToRem } from '../../../globalStyles/Utils';

export const StyledFooter = styled.footer`
  background: ${({ theme }) => theme.menuBackground};
  padding: ${pxToRem(20)};
  border-top: ${pxToRem(1)} solid ${({ theme }) => theme.accent};
  display: flex;
  flex-direction: column;
  display: ${(props) => props.isHomepage && 'none'};

  @media ${device.small} {
    align-items: center;
  }

  @media ${device.large} {
    background: transparent;
    padding: 0;
    border-top: none;
    display: block;
  }
`;
