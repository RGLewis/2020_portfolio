import styled from 'styled-components/macro';
import { pxToRem } from '../../../globalStyles/Utils';

export const Headshot = styled.img`
  width: ${pxToRem(300)};
  height: ${pxToRem(300)};
  border-radius: 50%;
  box-shadow: 0 ${pxToRem(3)} ${pxToRem(15)} ${({ theme }) => theme.blackOpaque};
  border: ${pxToRem(2)} solid ${({ theme }) => theme.accent};
  margin: ${pxToRem(20)} 0;
`;

export const HomeContainer = styled.div`
  text-align: center;
`;
