import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledOuterContainer,
  StyledMainContentContainer,
  StyledFullHeightFlexContainer,
  StyledPageContainer,
} from './Containers.styles';

export const OuterContainer = ({ children }) => (
  <StyledOuterContainer>{children}</StyledOuterContainer>
);

OuterContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export const MainContentContainer = ({ children, splashScreenIsShowing }) => {
  return (
    <StyledMainContentContainer splashScreenIsShowing={splashScreenIsShowing}>
      {children}
    </StyledMainContentContainer>
  );
};

MainContentContainer.propTypes = {
  children: PropTypes.node.isRequired,
  splashScreenIsShowing: PropTypes.bool.isRequired,
};

export const PageContainer = ({ children }) => (
  <StyledPageContainer>{children}</StyledPageContainer>
);

PageContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export const FullHeightFlexContainer = ({
  children,
  justify,
  align,
  isSplash,
}) => {
  return (
    <StyledFullHeightFlexContainer
      justify={justify}
      align={align}
      isSplash={isSplash}
    >
      {children}
    </StyledFullHeightFlexContainer>
  );
};

FullHeightFlexContainer.propTypes = {
  children: PropTypes.node.isRequired,
  justify: PropTypes.oneOf(['center', 'space-between']),
  align: PropTypes.oneOf(['center', 'flex-start']),
  isSplash: PropTypes.bool,
};

FullHeightFlexContainer.defaultProps = {
  justify: 'center',
  align: 'center',
  isSplash: false,
};
