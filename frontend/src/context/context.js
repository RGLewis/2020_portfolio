import { createContext } from 'react';

export const Context = createContext({
  // light/dark mode
  isLightMode: true,
  toggleLightMode: () => {},
  // splashscreen
  splashScreenIsShowing: true,
  handleSplashScreenIsShowing: () => {},
  // active experience section
  activeExperienceSection: undefined,
  setExperienceSection: () => {},
});
