import { useEffect, useState } from 'react';

export const UseResponsive = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const widthCheck = () => window.innerWidth;
      const handleResize = () => {
        setWindowWidth(widthCheck);
      };
      handleResize(); // Set width on load.

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', () => handleResize);
      };
    } else if (typeof window === 'undefined') {
      setWindowWidth('100vw');
    }
  }, []);

  return { windowWidth };
};

// Usage
// import { UseResponsive } from '<filepath>'

// const {windowWidth} = UseResponsive()
