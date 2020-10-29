import styled from 'styled-components/macro';
import { pxToRem } from '../../../globalStyles/Utils';

export const TogglerContainer = styled.div`
  width: ${pxToRem(100)};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
