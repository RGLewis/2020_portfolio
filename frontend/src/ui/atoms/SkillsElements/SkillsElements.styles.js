import styled from 'styled-components/macro';
import { pxToRem } from '../../../globalStyles/Utils';

export const StyledSkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: ${pxToRem(10)};
`;

export const StyledSkillsBar = styled.div`
  border: ${pxToRem(2)} solid ${({ theme }) => theme.accent};
  width: 100%;
  height: ${pxToRem(35)};
`;

export const StyledLevelContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: ${({ theme }) => theme.accent};
  padding: ${pxToRem(5)} ${pxToRem(15)};
  width: ${(props) =>
    (props.level === 'Comfortable' && '33.33%') ||
    (props.level === 'Advanced' && '66.66%') ||
    (props.level === 'Expert' && '100%')};
`;
