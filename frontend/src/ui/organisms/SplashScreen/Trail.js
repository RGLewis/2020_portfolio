// Package Imports
import React from 'react';
import PropTypes from 'prop-types';
import { useTrail } from 'react-spring';

// Hook Imports
import { UseResponsive } from '../../../hooks/useResponsive';

// Style Imports
import {
  TrailContainer,
  TrailTextContainer,
  ItemContainer,
} from './SplashScreen.styles';

const Trail = ({ animate, children, ...props }) => {
  // define window width / isMobile / height
  const { windowWidth } = UseResponsive();

  const isMobile = windowWidth < 768;

  const height = isMobile ? 40 : 110;

  // Set up animations
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 2, tension: 3000, friction: 500 },
    opacity: animate ? 1 : 0,
    x: animate ? 0 : 10,
    height: animate ? height : 0,
    from: { opacity: 0, x: 10, height: 0 },
  });

  return (
    <TrailContainer {...props}>
      <div>
        {trail.map(({ x, height, ...rest }, index) => (
          <TrailTextContainer
            key={items[index]}
            style={{
              ...rest,
              transform: x.interpolate((x) => `translate3d(0,${x}px,0)`),
            }}
          >
            <ItemContainer style={{ height }}>{items[index]}</ItemContainer>
          </TrailTextContainer>
        ))}
      </div>
    </TrailContainer>
  );
};

export default Trail;

Trail.propTypes = {
  animate: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};
