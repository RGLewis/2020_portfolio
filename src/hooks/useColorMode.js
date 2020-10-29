import { useState} from 'react';

export const UseColorMode = () => {
  // set up hook for isLightMode
  const [isLightMode, setIsLightMode] = useState(true);

  // toggler function
  const toggleLightMode = () => {
    setIsLightMode((prevState) => !prevState);
  };

  return {
    isLightMode,
    toggleLightMode,
  };
};
