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

const SplashScreen = ({ splashScreenIsShowing, setSplashScreenIsShowing }) => {
  // Context
  const context = useContext(Context);

  // Hooks
  const [animate, setAnimate] = useState(false);
  const [content, setContent] = useState(['Rafaela', 'Lewis']);

  // on page load, set animate after delay, then proceed to toggle animations
  useEffect(() => {
    // define functions
    const toggleAnimate = () => {
      setTimeout(() => {
        setAnimate(false);
        setNextContent(['Front End', 'Developer']);
      }, 3000);
    };

    const setNextContent = (content) => {
      setTimeout(() => {
        setContent(content);
      }, 200);

      setTimeout(() => {
        setAnimate(true);
      }, 200);
    };

    const hideSplashScreen = () => {
      setTimeout(() => {
        setSplashScreenIsShowing(false);
      }, 6000);
    };

    // after 300ms of blank screen, animate in first content
    setTimeout(() => {
      setAnimate(true);
    }, 300);

    toggleAnimate();

    hideSplashScreen();
  }, [setSplashScreenIsShowing]);

  // define animation
  const animateSplashScreen = useSpring({
    config: { mass: 2, tension: 280, friction: 100, precision: 0.1 },
    to: {
      zIndex: splashScreenIsShowing ? 1000 : -10,
      marginTop: splashScreenIsShowing ? '0vh' : '-150vh', // overshoot to make sure it's totally off screen before it's given a display none on rest
    },

    onRest: () => {
      const containerEl = document.getElementById('splash-screen-container');

      if (containerEl && !splashScreenIsShowing) {
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
          label="colorMode"
          isChecked={!context.isLightMode}
          lightToggleLabel="light"
          darkToggleLabel="dark"
          fixed={false}
        />
      </TogglerElementContainer>
      <OuterContainer>
        <FullHeightFlexContainer isSplash>
          {content.map((item, i) => (
            <Trail animate={animate} key={`trail${i}`}>
              <>
                <StyledSplashScreenFont variant="white">
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
