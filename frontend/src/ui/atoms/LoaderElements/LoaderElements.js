import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledLoaderElementContainer,
  StyledLoaderContentContainer,
  StyledDot,
} from './LoaderElements.styles';

export const LoaderElementContainer = ({ children, isButton }) => (
  <StyledLoaderElementContainer isButton={isButton}>
    {children}
  </StyledLoaderElementContainer>
);

LoaderElementContainer.propTypes = {
  children: PropTypes.node.isRequired,
  isButton: PropTypes.bool,
};

LoaderElementContainer.defaultProps = {
  isButton: false,
};

export const LoaderContentContainer = ({ children }) => (
  <StyledLoaderContentContainer>{children}</StyledLoaderContentContainer>
);

LoaderContentContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export const Dot = ({ isButton, variant }) => (
  <StyledDot isButton={isButton} variant={variant} />
);

Dot.propTypes = {
  isButton: PropTypes.bool,
  variant: PropTypes.oneOf(['white', 'accent']),
};

Dot.defaultProps = {
  isButton: false,
  variant: 'accent',
};
