import { useState } from 'react';

export const UseSplashScreen = () => {
  // set up hook for isLightMode
  const [splashScreenIsShowing, setSplashScreenIsShowing] = useState(true);

  // toggler function
  const handleSplashScreenIsShowing = () => {
    setSplashScreenIsShowing(false);
  };

  return {
    splashScreenIsShowing,
    handleSplashScreenIsShowing,
  };
};
