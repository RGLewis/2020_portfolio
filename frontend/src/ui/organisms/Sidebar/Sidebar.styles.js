import styled from 'styled-components/macro';
import { pxToRem } from '../../../globalStyles/Utils';

export const StyledSidebar = styled.div`
width: ${({theme}) => pxToRem(theme.globalValues.sidebar)};
display: flex;
flex-direction: column;
background: ${({theme}) => theme.menuBackground};
border-right: ${pxToRem(1)} solid ${({theme}) => theme.menuFontColor};
position: fixed;
top: 0;
left: 0;
bottom: 0;
z-index: 10;
padding: ${pxToRem(20)};
justify-content: space-between;
`