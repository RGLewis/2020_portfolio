import { useState } from 'react';

export const UseActiveExperienceSection = () => {
  // set up hook for activeExperienceSection
  const [activeExperienceSection, setActiveExperienceSection] = useState();

  // function
  const setExperienceSection = (section) => {
    setActiveExperienceSection(section);
  };

  return {
    activeExperienceSection,
    setExperienceSection,
  };
};
