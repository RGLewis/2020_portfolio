import styled from 'styled-components/macro';
import { pxToRem } from '../../../../globalStyles/Utils';
import { device } from '../../../../globalStyles/Breakpoints';

export const StyledSlash = styled.b`
  margin: 0 ${pxToRem(4)};
  cursor: auto;
  font-weight: ${({ theme }) => theme.fontWeights.medium};

  @media ${device.medium} {
    margin: 0 ${pxToRem(8)};
  }
`;

export const FooterLinksContainer = styled.div`
  margin: ${pxToRem(10)} 0;
`;
