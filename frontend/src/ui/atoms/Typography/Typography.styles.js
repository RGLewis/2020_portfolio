import styled from 'styled-components/macro';
import { pxToRem } from '../../../globalStyles/Utils';
import {device} from '../../../globalStyles/Breakpoints'


export const StyledHeadingFirst = styled.h1`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 1.1;
  font-size: ${pxToRem(55)};
  color: ${({ theme }) => theme.primaryFont};
  text-transform: capitalize;
  padding-bottom: ${pxToRem(10)};

  @media ${device.large} {
    font-size: ${pxToRem(50)};
    padding-bottom: 0;
  }
`;

export const StyledHeadingSecond = styled.h2`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${pxToRem(25)};
  color: ${({ theme }) => theme.primaryFont};
  padding-bottom: ${pxToRem(10)};
  text-transform: capitalize;
  letter-spacing: ${pxToRem(0.5)};
  border-bottom: ${pxToRem(1)} solid ${({ theme }) => theme.accent};
  margin-bottom: ${pxToRem(10)};
  text-align: center;

  @media ${device.large} {
    font-size: ${pxToRem(35)};
  }
`;

export const StyledBody = styled.p`
  font-weight: ${({ theme, isBold }) => isBold && theme.fontWeights.medium};
  margin-bottom: 0;

  text-align: ${(props) => props.aligned};
  font-size: ${(props) => (props.isSmall ? pxToRem(12) : pxToRem(14))};
  font-size: ${(props) => props.isLarge && pxToRem(18)};
  color: ${({ theme, variant }) =>
    theme[variant]};
  text-transform: ${(props) => props.textTransform};

  @media ${device.large} {
    font-size: ${(props) => (props.isSmall ? pxToRem(12) : pxToRem(16))};
    font-size: ${(props) => props.isLarge && pxToRem(20)};
  }
`;
