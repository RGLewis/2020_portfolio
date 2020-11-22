import styled from 'styled-components/macro';
import { pxToRem } from '../../../globalStyles/Utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { transition } from '../../../globalStyles/Mixins';
import { animated } from 'react-spring';

export const StyledTopContainer = styled.div`
  border-bottom: ${pxToRem(1)} solid ${({ theme }) => theme.secondaryFont};
  display: flex;
  width: 100%;
  min-height: ${pxToRem(5)};
  align-items: center;
  justify-content: space-between;
  padding: ${pxToRem(10)};
  z-index: 100;
`;

export const StyledAccordionHeadingContainer = styled.div`
  width: 80%;
  padding-right: ${pxToRem(10)};
`;

export const StyledAccordionButtonContainer = styled.div`
  width: 20%;
  padding-left: ${pxToRem(10)};
  display: flex;
  justify-content: flex-end;
`;

export const StyledAccordionButton = styled.button`
  width: ${pxToRem(35)};
  height: ${pxToRem(35)};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: transparent;
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.accent};
  width: ${pxToRem(25)};
  height: ${pxToRem(25)};
  transform: ${(props) => props.ishiding === 'true' && 'rotate(180deg)'};
  ${transition('all', '200ms', 'ease', '0s')};
  pointer-events: none;
`;

export const StyledAccordionContentContainer = styled(animated.div)`
  padding: ${pxToRem(10)};
  pointer-events: none;
  overflow: hidden;
`;

export const StyledAccordionContainer = styled.div``;
