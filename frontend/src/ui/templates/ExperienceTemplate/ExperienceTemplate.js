import React, { useState } from 'react';
import GET_PAGE from '../../../apollo/get_page';
import { useQuery } from '@apollo/client';
import HeroImage from '../../atoms/HeroImage/HeroImage';
import { OuterContainer } from '../../atoms/Containers/Containers';
import HeadingFirst from '../../atoms/Typography/HeadingFirst';
import HeadingSecond from '../../atoms/Typography/HeadingSecond';
import RichTextWriteUp from '../../molecules/RichText/RichTextWriteUp/RIchTextWriteUp';
import SkillsItem from '../../molecules/SkillsItem/SkillsItem';
import {
  ExperiencePageContainer,
  ExperiencePageSection,
} from './ExperienceTemplate.styles';

const ExperienceTemplate = () => {
  const [experienceData, setExperienceData] = useState();

  // Apollo query
  const { error, loading } = useQuery(GET_PAGE, {
    variables: { id: '2P5KuyZJQy7UKZdYg9xwi1' },
    onCompleted: (data) => setExperienceData(data),
  });

  let experienceContent = {};

  const defineSectionContent = (sectionTitle) => {
    const experienceComponents = experienceData.page.componentsCollection.items;

    const sectionArray = experienceComponents.filter(
      (component) => component.title === sectionTitle
    );

    experienceContent[sectionTitle] = sectionArray[0];
  };

  if (experienceData) {
    defineSectionContent('Profile');
    defineSectionContent('Work');
    defineSectionContent('Skills');
    defineSectionContent('Education');
  }

  console.log(experienceContent);

  if (loading) {
    return (
      <ExperiencePageContainer>
        <p>Loading</p>
      </ExperiencePageContainer>
    );
  }

  if (error) {
    return (
      <ExperiencePageContainer>
        <p>Error</p>
      </ExperiencePageContainer>
    );
  }

  if (!experienceData && experienceContent) {
    return '';
  }

  if (experienceData && experienceContent) {
    return (
      <ExperiencePageContainer>
        <HeroImage
          src={experienceData.page.image.url}
          description={experienceData.page.image.description}
        />
        <OuterContainer>
          <HeadingFirst isPageHeading variant="menuFontColor">
            {experienceData.page.title}
          </HeadingFirst>

          {/* Profile section */}
          <ExperiencePageSection id="profile">
            <RichTextWriteUp
              data={experienceContent.Profile.content.json}
              variant="primaryFont"
              isLarge
            />
          </ExperiencePageSection>

          {/* Skills section */}
          <HeadingSecond>{experienceContent.Skills.title}</HeadingSecond>
          <ExperiencePageSection id="skills">
            {experienceContent.Skills.skillsItemCollection.items.map(
              (skill) => (
                <SkillsItem
                  key={skill.title}
                  skillsTitle={skill.title}
                  level={skill.level}
                />
              )
            )}
          </ExperiencePageSection>

          {/* Education section */}
          <ExperiencePageSection id="education">
            <RichTextWriteUp
              data={experienceContent.Education.content.json}
              variant="primaryFont"
              isLarge
            />
          </ExperiencePageSection>
        </OuterContainer>
      </ExperiencePageContainer>
    );
  }
};

export default ExperienceTemplate;

// page:

// componentsCollection: {__typename: "PageComponentsCollection", items: Array(4)}

// image:
// description: "A black keyboard illuminated by a purple light"
// url: "https://images.ctfassets.net/9z8x4mbh50dv/6IkreHHhnW7XtRqBf3b5cZ/0014bed1c5da9afb929242c45a092811/anas-alshanti-feXpdV001o4-unsplash.jpg"

// title: "Experience"
