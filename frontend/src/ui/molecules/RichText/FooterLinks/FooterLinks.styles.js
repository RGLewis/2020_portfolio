import styled from 'styled-components/macro';
import { pxToRem } from '../../../../globalStyles/Utils';

export const StyledSlash = styled.b`
  margin: 0 ${pxToRem(8)};
  cursor: auto;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export const FooterLinksContainer = styled.div`
  margin: ${pxToRem(10)} 0;
`;
