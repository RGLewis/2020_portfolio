import styled from 'styled-components/macro';
import { pxToRem } from '../../../globalStyles/Utils';
import { device } from '../../../globalStyles/Breakpoints';

export const StyledHeroImage = styled.div`
  height: ${pxToRem(300)};
  width: 100vw;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: ${(props) =>
    props.isVerticalTop ? 'top center' : 'center center'};

  @media ${device.medium} {
    height: ${pxToRem(400)};
  }

  @media ${device.large} {
    height: ${pxToRem(600)};
    width: calc(100vw - ${({ theme }) => pxToRem(theme.globalValues.sidebar)});
  }
`;
