import styled from 'styled-components/macro';
import { pxToRem } from '../../../globalStyles/Utils';

export const Headshot = styled.img`
  width: ${pxToRem(300)};
  height: ${pxToRem(300)};
  border-radius: 50%;
  /* box-shadow: 0 ${pxToRem(3)} ${pxToRem(15)} rgba(0, 0, 0, 0.2); */
  box-shadow: 0 ${pxToRem(3)} ${pxToRem(15)} ${({ theme }) => theme.blackOpaque};
  border: ${pxToRem(2)} solid ${({ theme }) => theme.accent};
  margin-bottom: ${pxToRem(20)};
`;
