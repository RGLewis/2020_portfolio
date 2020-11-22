import styled from 'styled-components/macro';
import { pxToRem } from '../../../../globalStyles/Utils';
import { transition } from '../../../../globalStyles/Mixins';

export const StyledLabel = styled.label`
  position: absolute;
  top: ${(props) => (props.isFloating ? pxToRem(15) : pxToRem(35))};
  left: ${pxToRem(10)};
  transform-origin: 0 0;
  font: inherit;
  font-weight: ${({ theme, isFloating }) =>
    isFloating && theme.fontWeights.extraBold};
  font-size: ${(props) => props.isFloating && pxToRem(14)};
  ${transition('all', '100ms', 'ease', '0s')};
`;

export const StyledInput = styled.input`
  border: ${pxToRem(1)} solid
    ${({ theme, isAlert }) => (isAlert ? theme.alert : theme.secondaryAccent)};
  font: inherit;
  width: 100%;
  padding: ${pxToRem(25)} ${pxToRem(10)};
  background: ${({ theme }) => theme.background};
  margin-top: ${pxToRem(10)};
  color: ${({ theme }) => theme.primaryFont};

  &::placeholder {
    color: transparent;
  }

  &:focus + ${StyledLabel} {
    top: ${pxToRem(15)};
    font-size: ${pxToRem(14)};
    font-weight: ${({ theme }) => theme.fontWeights.extraBold};
  }
`;

export const StyledTextArea = styled.textarea`
  border: ${pxToRem(1)} solid
    ${({ theme, isAlert }) => (isAlert ? theme.alert : theme.secondaryAccent)};
  font: inherit;
  width: 100%;
  padding: ${pxToRem(25)} ${pxToRem(10)};
  background: ${({ theme }) => theme.background};
  margin-top: ${pxToRem(10)};
  color: ${({ theme }) => theme.primaryFont};

  &::placeholder {
    color: transparent;
  }

  &:focus + ${StyledLabel} {
    top: ${pxToRem(15)};
    font-size: ${pxToRem(14)};
    font-weight: ${({ theme }) => theme.fontWeights.extraBold};
  }
`;

export const InputContainer = styled.div`
  position: relative;
`;
