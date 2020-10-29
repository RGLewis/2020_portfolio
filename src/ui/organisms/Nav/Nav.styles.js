import styled from 'styled-components/macro';

export const StyledNav = styled.nav``

export const CtaContainer = styled.div`
display: flex;
width: 100%;
justify-content: ${props => props.showMainNav ? 'flex-end' : 'flex-start'};
`