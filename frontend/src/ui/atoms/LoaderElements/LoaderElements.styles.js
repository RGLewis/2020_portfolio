import styled, { keyframes } from 'styled-components/macro';
import { pxToRem } from '../../../globalStyles/Utils';

const dotFlash = keyframes`
  0% {
    opacity: .2;
  }

  20% {
    opacity: 1;
  }

  100% {
    opacity: .2;
  }
`;

export const StyledLoaderElementContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledLoaderContentContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const StyledDot = styled.span`
  height: ${(props) => (props.isButton ? pxToRem(20) : pxToRem(40))};
  width: ${(props) => (props.isButton ? pxToRem(20) : pxToRem(40))};
  margin: 0 ${pxToRem(10)};
  background: ${({ theme, variant }) => theme[variant]};
  border-radius: 50%;

  animation: ${dotFlash} 1.4s infinite;
  animation-fill-mode: both;
  }

  &:nth-child(2) {
    animation-delay: 0.2s;
  }

  &:nth-child(3) {
    animation-delay: 0.4s;
  }
`;
