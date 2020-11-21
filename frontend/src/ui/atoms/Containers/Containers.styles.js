import styled from 'styled-components/macro';
import { pxToRem } from '../../../globalStyles/Utils';
import { device } from '../../../globalStyles/Breakpoints';

export const StyledOuterContainer = styled.div`
  max-width: ${pxToRem(1600)};
  width: 90%;
  margin: 0 auto;

  @media ${device.large} {
    width: 70%;
  }
`;

export const StyledMainContentContainer = styled.main`
  padding-top: ${pxToRem(90)}; // account for fixed header
  min-height: ${(props) =>
    props.minHeight === '100vh'
      ? `calc(100vh - ${pxToRem(90)})`
      : `calc(${pxToRem(props.minHeight)} - ${pxToRem(90)})`};
  max-height: ${(props) =>
    (props.splashScreenIsShowing &&
      props.minHeight === '100vh' &&
      `calc(100vh - ${pxToRem(90)})`) ||
    (props.splashScreenIsShowing &&
      props.minHeight !== '100vh' &&
      `calc(${pxToRem(props.minHeight)} - ${pxToRem(90)})`)};
  overflow: ${(props) => props.splashScreenIsShowing && 'hidden'};

  /* to account for sidebar */
  @media ${device.large} {
    margin-left: ${({ theme }) => pxToRem(theme.globalValues.sidebar)};
    padding-top: 0;

    min-height: ${(props) =>
      props.minHeight === '100vh' ? `100vh` : pxToRem(props.minHeight)};
    max-height: ${(props) =>
      (props.splashScreenIsShowing && props.minHeight === '100vh' && `100vh`) ||
      (props.splashScreenIsShowing &&
        props.minHeight !== '100vh' &&
        pxToRem(props.minHeight))};
  }
`;

export const StyledFullHeightFlexContainer = styled.div`
  min-height: ${(props) =>
    props.minHeight === '100vh'
      ? `calc(100vh - ${pxToRem(90)})`
      : `calc(${pxToRem(props.minHeight)} - ${pxToRem(90)})`};
  min-height: ${(props) =>
    (props.isSplash && props.minHeight === '100vh' && `100vh`) ||
    (props.isSplash &&
      props.minHeight !== '100vh' &&
      pxToRem(props.minHeight))};
  padding-bottom: ${pxToRem(20)};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};

  @media ${device.large} {
    padding-top: 0;

    min-height: ${(props) =>
      props.minHeight === '100vh' ? `100vh` : pxToRem(props.minHeight)};
  }
`;

export const StyledPageContainer = styled.div`
  padding-bottom: ${pxToRem(20)};
`;
