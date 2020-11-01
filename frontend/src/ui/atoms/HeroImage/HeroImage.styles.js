import styled from 'styled-components/macro';
import { pxToRem } from '../../../globalStyles/Utils';
import { device } from '../../../globalStyles/Breakpoints';

export const StyledHeroImage = styled.div`
  @media ${device.large} {
    /* width: 100vw; */
    height: ${pxToRem(600)};
    background-image: url(${(props) => props.src});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
    width: calc(100vw - ${({ theme }) => pxToRem(theme.globalValues.sidebar)});
  }
`;
