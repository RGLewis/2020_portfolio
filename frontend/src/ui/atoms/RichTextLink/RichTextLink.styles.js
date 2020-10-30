import styled from 'styled-components/macro';
import { pxToRem } from '../../../globalStyles/Utils';

export const StyledLink = styled.a`
color: ${({theme, variant}) => theme[variant]}
`