import styled from 'styled-components/macro';
import { pxToRem } from '../../../../globalStyles/Utils';
import {device} from '../../../../globalStyles/Breakpoints'

export const NavLinksContainer = styled.div`
  @media ${device.large}{
  /* align with main content */
  margin-top: ${pxToRem(61)}
  }
`

export const StyledParagraph = styled.p`
cursor: initial;
`