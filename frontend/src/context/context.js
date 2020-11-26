import { createContext } from 'react';

export const Context = createContext({
  // light/dark mode
  isLightMode: true,
  toggleLightMode: () => {},
  // active experience section
  activeExperienceSection: undefined,
  setExperienceSection: () => {},
});
