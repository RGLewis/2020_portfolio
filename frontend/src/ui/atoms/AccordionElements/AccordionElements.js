import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useSpring } from 'react-spring';

import {
  StyledTopContainer,
  StyledAccordionButtonContainer,
  StyledAccordionHeadingContainer,
  StyledAccordionButton,
  StyledFontAwesomeIcon,
  StyledAccordionContentContainer,
  StyledAccordionContainer,
} from './AccordionElements.styles';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export const TopContainer = ({ children }) => (
  <StyledTopContainer>{children}</StyledTopContainer>
);

TopContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export const AccordionHeadingContainer = ({ children }) => (
  <StyledAccordionHeadingContainer>{children}</StyledAccordionHeadingContainer>
);

AccordionHeadingContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export const AccordionButtonContainer = ({ children }) => (
  <StyledAccordionButtonContainer>{children}</StyledAccordionButtonContainer>
);

AccordionButtonContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export const AccordionButton = ({ children, onClick, value }) => (
  <StyledAccordionButton onClick={onClick} value={value}>
    {children}
  </StyledAccordionButton>
);

AccordionButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export const FontAwesomeIcon = ({ isHiding }) => (
  <StyledFontAwesomeIcon
    icon={faChevronDown}
    aria-label={
      isHiding ? 'Show accordion content.' : 'Hide accordion content.'
    }
    ishiding={isHiding}
  />
);

FontAwesomeIcon.propTypes = {
  isHiding: PropTypes.string.isRequired,
};

export const AccordionContentContainer = ({
  children,
  isExpanded,
  canExecuteAnimation,
  setCanExecuteAnimation,
}) => {
  // define the ref
  const accordionContentRef = useRef();

  const animateExpandContent = useSpring({
    to: {
      opacity: isExpanded && canExecuteAnimation ? 1 : 0,
      zIndex: isExpanded && canExecuteAnimation ? 10 : -10,
      maxHeight: isExpanded && canExecuteAnimation ? `10000px` : `0px`, // huge number, just as a safeguard
    },

    onRest: () => {
      setCanExecuteAnimation(true);
    },
  });

  return (
    <StyledAccordionContentContainer
      style={animateExpandContent}
      ref={accordionContentRef}
    >
      {children}
    </StyledAccordionContentContainer>
  );
};

AccordionContentContainer.propTypes = {
  children: PropTypes.node.isRequired,
  isExpanded: PropTypes.bool.isRequired,
  canExecuteAnimation: PropTypes.bool.isRequired,
  setCanExecuteAnimation: PropTypes.func.isRequired,
};

export const AccordionContainer = ({ children }) => (
  <StyledAccordionContainer>{children}</StyledAccordionContainer>
);

AccordionContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
