import { animated } from 'react-spring';
import styled from 'styled-components';
import { pxToRem } from '../../../globalStyles/Utils';
import { device } from '../../../globalStyles/Breakpoints';
import { StyledHeadingFirst } from '../../atoms/Typography/Typography.styles';

export const TrailContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TrailTextContainer = styled(animated.div)`
  width: 100%;
  height: ${pxToRem(40)};
  will-change: transform, opacity;
  overflow: hidden;

  @media ${device.medium} {
    height: ${pxToRem(100)};
  }

  @media ${device.large} {
    height: ${pxToRem(110)};
  }
`;

export const ItemContainer = styled(animated.div)`
  overflow: hidden;
`;

export const StyledSplashScreenFont = styled(StyledHeadingFirst)`
  font-weight: ${({ theme }) => theme.fontWeights.extraBold};
  font-family: ${({ theme }) => theme.fonts.montserrat};
  font-size: ${pxToRem(40)};
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: ${pxToRem(2)};

  /* FOR SPRING */
  position: relative;
  width: 100%;
  will-change: transform, opacity;
  overflow: hidden;

  @media ${device.medium} {
    font-size: ${pxToRem(100)};
  }
`;

export const SectionContainer = styled(animated.section)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.menuBackground};
`;

export const TogglerElementContainer = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: ${pxToRem(20)};
`;
