import React, { useState, useEffect } from 'react';
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
  // NOTE: Run window height function in containers to avoid memory leaks
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const heightCheck = () => window.innerHeight;
      const handleResize = () => {
        setWindowHeight(heightCheck);
      };
      handleResize(); // Set width/height on load.

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', () => handleResize);
      };
    } else if (typeof window === 'undefined') {
      setWindowHeight('100vh');
    }
  }, []);

  return (
    <StyledMainContentContainer
      splashScreenIsShowing={splashScreenIsShowing}
      windowHeight={windowHeight}
    >
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
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const heightCheck = () => window.innerHeight;
      const handleResize = () => {
        setWindowHeight(heightCheck);
      };
      handleResize(); // Set width/height on load.

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', () => handleResize);
      };
    } else if (typeof window === 'undefined') {
      setWindowHeight('100vh');
    }
  }, []);

  return (
    <StyledFullHeightFlexContainer
      justify={justify}
      align={align}
      isSplash={isSplash}
      windowHeight={windowHeight}
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
