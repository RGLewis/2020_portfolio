import styled from 'styled-components/macro';
import { pxToRem } from '../../../globalStyles/Utils';

export const StyledNav = styled.nav``;

export const CtaContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: ${(props) =>
    props.showMainNav ? 'flex-end' : 'flex-start'};
`;

export const CtaElementWrapper = styled.div`
  opacity: ${(props) => (props.isShowing ? 1 : 0)};
  pointer-events: ${(props) => !props.isShowing && 'none'};
`;
