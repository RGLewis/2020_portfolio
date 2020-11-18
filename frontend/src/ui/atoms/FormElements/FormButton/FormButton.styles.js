import styled, { keyframes } from 'styled-components/macro';
import { pxToRem } from '../../../../globalStyles/Utils';
import { transition, borderRadius } from '../../../../globalStyles/Mixins';

const wave = keyframes`
  0% { transform: rotate( 1.0deg) }
   10% { transform: rotate(16.0deg) }  
   20% { transform: rotate(-9.0deg) }
   30% { transform: rotate(16.0deg) }
   40% { transform: rotate(-5.0deg) }
   50% { transform: rotate(11.0deg) }
   60% { transform: rotate( 1.0deg) }
  100% { transform: rotate( 1.0deg) }
`;

export const StyledFormButton = styled.button`
  background: ${({ theme }) => theme.background};
  border: ${pxToRem(1)} solid ${({ theme }) => theme.contrast};
  color: ${({ theme }) => theme.contrast};
  cursor: pointer;
  padding: ${pxToRem(20)};
  ${borderRadius(3, false)};
  ${transition('all', '100ms', 'ease', '0s')};
  text-transform: uppercase;
  font-size: ${pxToRem(20)};
  font-weight: ${({ theme }) => theme.fontWeights.medium};

  &:hover {
    background: ${({ theme }) => theme.contrast};
    color: ${({ theme }) => theme.background};
  }

  &:disabled {
    background: ${({ theme }) => theme.opaqueContrast};
    color: ${({ theme }) => theme.contrast};
    cursor: not-allowed;
  }
`;

export const Emoji = styled.span`
  ${StyledFormButton}:hover & {
    animation-name: ${wave};
    animation-duration: 2.5s;
    animation-iteration-count: infinite;
    transform-origin: 80% 80%;
    display: inline-block;
  }

  ${StyledFormButton}:disabled & {
    animation: none;
  }
`;
