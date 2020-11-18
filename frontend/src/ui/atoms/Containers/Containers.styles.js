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
  min-height: ${(props) =>
    props.minHeight === '100vh' ? '100vh' : pxToRem(props.minHeight)};

  /* to account for sidebar */
  @media ${device.large} {
    margin-left: ${({ theme }) => pxToRem(theme.globalValues.sidebar)};
  }
`;

export const StyledFullHeightFlexContainer = styled.div`
  min-height: ${(props) =>
    props.minHeight === '100vh' ? '100vh' : pxToRem(props.minHeight)};
  padding-bottom: ${pxToRem(20)};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  padding: ${pxToRem(20)} 0;
`;

export const StyledPageContainer = styled.div`
  padding-bottom: ${pxToRem(20)};
`;
