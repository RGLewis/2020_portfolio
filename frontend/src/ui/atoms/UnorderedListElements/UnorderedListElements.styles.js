import styled from 'styled-components/macro';
import { pxToRem } from '../../../globalStyles/Utils';

export const StyledListItem = styled.li`
  padding: ${props => props.spaceBetween && pxToRem(5)};
  margin: ${props => props.spaceBetween && pxToRem(5)};
  min-height: ${pxToRem(5)};
  display: ${props => props.orientation === 'horizontal' && 'flex'};
  align-items: ${props => props.orientation === 'horizontal' && 'center'};
`;

export const StyledUnorderedList = styled.ul`
display: flex;
flex-wrap: wrap;
flex-direction: ${props => props.orientation === 'horizontal' ? 'row' : 'column'}
`