import { useEffect, useState } from 'react';

export const UseResponsive = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0)
  const [isDesktop, setIsDesktop] = useState(true)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const widthCheck = () => window.innerWidth;
      const heightCheck = () => window.innerHeight;
      const handleResize = () => {
        setWindowWidth(widthCheck);
        setWindowHeight(heightCheck)
      };
      handleResize(); // Set width/height on load.

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', () => handleResize);
      };
    } else {
      setWindowWidth('100vw')
      setWindowHeight('100vh')
    }
  }, []);

  return {windowWidth, windowHeight};
};

// Usage
// import { UseResponsive } from '<filepath>'

// const {windowHeight, windowWidth} = UseResponsive()