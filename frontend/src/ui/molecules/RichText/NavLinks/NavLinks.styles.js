import styled from 'styled-components/macro';
import { pxToRem } from '../../../../globalStyles/Utils';
import {device} from '../../../../globalStyles/Breakpoints'

export const NavLinksContainer = styled.div`
  @media ${device.large}{
  margin-top: ${pxToRem(20)}
  }
`

export const StyledParagraph = styled.p`
cursor: initial;
`