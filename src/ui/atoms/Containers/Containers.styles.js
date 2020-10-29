import styled from 'styled-components/macro';
import { pxToRem } from '../../../globalStyles/Utils';
import {device} from '../../../globalStyles/Breakpoints'

export const StyledOuterContainer = styled.div`
  max-width: ${pxToRem(1600)};
  width: 90%;
  margin: 0 auto;
`;

export const StyledMainContentContainer = styled.main`
/* to account for sidebar */
@media ${device.large}{
  margin-left: ${({theme}) => pxToRem(theme.globalValues.sidebar)};
}
`