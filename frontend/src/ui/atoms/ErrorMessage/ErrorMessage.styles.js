import styled from 'styled-components/macro';
import { StyledBody } from '../Typography/Typography.styles';
import { pxToRem } from '../../../globalStyles/Utils';
import { device } from '../../../globalStyles/Breakpoints';

export const StyledErrorMessage = styled(StyledBody)`
  font-size: ${pxToRem(10)};
  opacity: ${(props) => (props.isShowing ? 1 : 0)};
  margin: ${pxToRem(5)} 0 ${pxToRem(10)} 0;
  color: ${({ theme }) => theme.alert};
  font-weight: ${({ theme }) => theme.fontWeights.medium};

  @media ${device.medium} {
    font-size: ${pxToRem(14)};
  }
`;
