// Package Imports
import React, { useState, useEffect, useContext } from 'react';
import { useSpring } from 'react-spring';

// Context Imports
import { Context } from '../../../context/context';

// Component Imports
import Toggler from '../../molecules/Toggler/Toggler';

import Trail from './Trail';
import {
  OuterContainer,
  FullHeightFlexContainer,
} from '../../atoms/Containers/Containers';

// Style Imports
import {
  StyledSplashScreenFont,
  SectionContainer,
  TogglerElementContainer,
} from './SplashScreen.styles';

const SplashScreen = () => {
  // Context
  const context = useContext(Context);

  // States
  const [animate, setAnimate] = useState(false);
  const [content, setContent] = useState(['Rafaela', 'Lewis']);

  // on page load, set animate after delay, then proceed to toggle animations
  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 300);

    toggleAnimate(3000, ['Front-End', 'Developer']);

    hideSplashScreen();
  }, []);

  const toggleAnimate = (time, content) => {
    setTimeout(() => {
      setAnimate(false);
      setNextContent(content);
    }, time);
  };

  const setNextContent = (content) => {
    setTimeout(() => {
      setContent(content);
    }, 200);

    setTimeout(() => {
      setAnimate(true);
    }, 200);
  };

  // set context to hide splash screen
  const hideSplashScreen = () => {
    setTimeout(() => {
      context.handleSplashScreenIsShowing();
    }, 6000);
  };

  // define animation
  const animateSplashScreen = useSpring({
    config: { mass: 2, tension: 280, friction: 100, precision: 0.1 },
    to: {
      zIndex: context.splashScreenIsShowing ? 100 : -10,
      marginTop: context.splashScreenIsShowing ? '0vh' : '-150vh', // overshoot to make sure it's totally off screen before it's given a display none on rest
    },

    onRest: () => {
      const containerEl = document.getElementById('splash-screen-container');

      if (containerEl && !context.splashScreenIsShowing) {
        containerEl.style.display = 'none';
      }
    },
  });

  return (
    <SectionContainer style={animateSplashScreen} id="splash-screen-container">
      <TogglerElementContainer>
        <Toggler
          onChange={() => {
            context.toggleLightMode();
          }}
          label={'colorMode'}
          isChecked={!context.isLightMode}
          lightToggleLabel="light"
          darkToggleLabel="dark"
          fixed={false}
        />
      </TogglerElementContainer>
      <OuterContainer>
        <FullHeightFlexContainer>
          {content.map((item, i) => (
            <Trail animate={animate} key={`trail${i}`}>
              <>
                <StyledSplashScreenFont variant="menuFontColor">
                  {item}
                </StyledSplashScreenFont>
              </>
            </Trail>
          ))}
        </FullHeightFlexContainer>
      </OuterContainer>
    </SectionContainer>
  );
};

export default SplashScreen;
