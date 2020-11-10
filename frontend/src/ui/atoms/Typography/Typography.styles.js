import styled from 'styled-components/macro';
import { pxToRem } from '../../../globalStyles/Utils';
import { device } from '../../../globalStyles/Breakpoints';

export const StyledHeadingFirst = styled.h1`
  font-weight: ${({ theme }) => theme.fontWeights.black};
  font-family: ${({ theme }) => theme.fonts.montserrat};
  line-height: 1.4;
  font-size: ${pxToRem(55)};
  color: ${({ theme, variant }) => theme[variant]};
  text-transform: ${(props) =>
    props.isPageHeading ? 'uppercase' : 'capitalize'};
  padding-bottom: 0;
  border-bottom: ${pxToRem(1)} solid transparent;
  padding-left: ${(props) => props.isUnderlined && pxToRem(10)};
  padding-right: ${(props) => props.isUnderlined && pxToRem(10)};
  border-bottom-color: ${({ theme, isUnderlined }) =>
    isUnderlined && theme.accent};
  letter-spacing: ${(props) => props.isPageHeading && pxToRem(2)};
  margin-top: ${(props) => props.isPageHeading && pxToRem(-90)};
  text-shadow: ${({ theme, isPageHeading }) =>
    isPageHeading &&
    `${pxToRem(0)} ${pxToRem(5)} ${pxToRem(30)} ${theme.black}`};

  @media ${device.large} {
    font-size: ${pxToRem(70)};
    padding-bottom: 0;
  }

  @media ${device.large} {
    font-size: ${(props) => (props.isPageHeading ? pxToRem(90) : pxToRem(50))};
  }

  @media ${device.extraLarge} {
    font-size: ${(props) => (props.isPageHeading ? pxToRem(100) : pxToRem(70))};
  }
`;

export const StyledHeadingSecond = styled.h2`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${pxToRem(25)};
  color: ${({ theme }) => theme.primaryFont};
  padding-bottom: ${pxToRem(10)};
  text-transform: capitalize;
  letter-spacing: ${pxToRem(0.5)};

  margin-bottom: ${pxToRem(10)};
  border-bottom: ${pxToRem(2)} solid ${({ theme }) => theme.accent};

  @media ${device.large} {
    font-size: ${pxToRem(55)};
  }
`;

export const StyledHeadingThird = styled.h3`
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${pxToRem(20)};
  color: ${({ theme, variant }) => theme[variant]};
  padding: ${pxToRem(5)} 0;
  text-transform: capitalize;
  letter-spacing: ${pxToRem(0.5)};

  @media ${device.large} {
    font-size: ${pxToRem(25)};
  }

  @media ${device.extraLarge} {
    font-size: ${pxToRem(30)};
  }
`;

export const StyledHeadingFourth = styled.h3`
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${pxToRem(20)};
  color: ${({ theme, variant }) => theme[variant]};
  padding: ${pxToRem(5)} 0;
  letter-spacing: ${pxToRem(0.5)};

  @media ${device.large} {
    font-size: ${pxToRem(25)};
  }
`;

export const StyledHeadingFifth = styled.h3`
  font-weight: ${({ theme }) => theme.fontWeights.extraBold};
  font-size: ${pxToRem(20)};
  color: ${({ theme, variant }) => theme[variant]};
  padding: ${pxToRem(5)} 0;
  letter-spacing: ${pxToRem(0.5)};
`;

export const StyledBody = styled.p`
  font-weight: ${({ theme, isBold }) => isBold && theme.fontWeights.medium};
  margin-bottom: ${(props) => (props.marginBottom ? pxToRem(10) : '0')};

  text-align: ${(props) => props.aligned};
  font-size: ${(props) => (props.isSmall ? pxToRem(12) : pxToRem(14))};
  font-size: ${(props) => props.isLarge && pxToRem(18)};
  color: ${({ theme, variant }) => theme[variant]};
  text-transform: ${(props) => props.textTransform};

  @media ${device.large} {
    font-size: ${(props) => (props.isSmall ? pxToRem(12) : pxToRem(16))};
    font-size: ${(props) => props.isLarge && pxToRem(20)};
  }
`;

export const StyledUppercase = styled.span`
  text-transform: uppercase;
  letter-spacing: ${pxToRem(1)};
`;
