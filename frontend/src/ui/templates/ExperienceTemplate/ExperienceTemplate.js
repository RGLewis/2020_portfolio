import React, { useState, useRef, useEffect, useContext } from 'react';
import { Context } from '../../../context/context';
import GET_PAGE from '../../../apollo/get_page';
import { useQuery } from '@apollo/client';
import { UseResponsive } from '../../../hooks/useResponsive';
import HeroImage from '../../atoms/HeroImage/HeroImage';
import { OuterContainer } from '../../atoms/Containers/Containers';
import HeadingFirst from '../../atoms/Typography/HeadingFirst';
import HeadingSecond from '../../atoms/Typography/HeadingSecond';
import RichTextWriteUp from '../../molecules/RichText/RichTextWriteUp/RIchTextWriteUp';
import SkillsItem from '../../molecules/SkillsItem/SkillsItem';
import Accordion from '../../organisms/Accordion/Accordion';
import {
  ExperiencePageContainer,
  ExperiencePageSection,
} from './ExperienceTemplate.styles';

const ExperienceTemplate = () => {
  // define context
  const context = useContext(Context);

  const [experienceData, setExperienceData] = useState();
  const [expandedAccordion, setExpandedAccordion] = useState();
  const [canExecuteAnimation, setCanExecuteAnimation] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  // use responsive
  const { windowHeight, windowWidth } = UseResponsive();

  // define page refs
  const pageRef = useRef();
  const introRef = useRef();
  const profileRef = useRef();
  const workRef = useRef();
  const skillsRef = useRef();
  const educationRef = useRef();

  useEffect(() => {
    const onScroll = (e) => {
      setScrollPosition(e.target.documentElement.scrollTop);
    };
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollPosition, windowWidth, windowHeight]);

  const GetHeight = (ref) => {
    const [height, setHeight] = useState(0);

    useEffect(() => {
      if (ref.current) {
        const elementRect = ref.current.getBoundingClientRect();

        setHeight(elementRect.height);
      }
    }, [windowWidth, ref, height, scrollPosition, experienceData]);

    return height;
  };

  const GetDistanceFromTop = (elements, lastSection) => {
    const [total, setTotal] = useState();
    useEffect(() => {
      const calcTotal = elements.reduce((a, b) => a + b, 0);

      const offset = lastSection / 2;

      const withOffset = calcTotal - offset; // calculate with offset to account for last section of page

      setTotal(withOffset);
    }, [intro, profile, work, skills, education]);

    return total;
  };

  // define indivdual element heights
  const intro = GetHeight(introRef);
  const profile = GetHeight(profileRef);
  const work = GetHeight(workRef);
  const skills = GetHeight(skillsRef);
  const education = GetHeight(educationRef);

  // get the distance from top
  const profileHeight = GetDistanceFromTop([intro, profile], profile);
  const workHeight = GetDistanceFromTop([intro, profile, work], work);
  const skillsHeight = GetDistanceFromTop(
    [intro, profile, work, skills],
    skills
  );
  const educationHeight = GetDistanceFromTop(
    [intro, profile, work, skills, education],
    education
  );

  // watch scroll position and update active section
  useEffect(() => {
    if (scrollPosition <= intro) {
      context.setExperienceSection('intro');
    } else if (scrollPosition > intro && scrollPosition <= profileHeight) {
      context.setExperienceSection('profile');
    } else if (scrollPosition > profileHeight && scrollPosition <= workHeight) {
      context.setExperienceSection('work');
    } else if (scrollPosition > workHeight && scrollPosition <= skillsHeight) {
      context.setExperienceSection('skills');
    } else if (
      scrollPosition > skillsHeight &&
      scrollPosition <= educationHeight
    ) {
      context.setExperienceSection('education');
    } else {
      context.setExperienceSection(undefined);
    }
  }, [scrollPosition]);

  // Apollo query
  const { error, loading } = useQuery(GET_PAGE, {
    variables: { id: '2P5KuyZJQy7UKZdYg9xwi1' },
    onCompleted: (data) => setExperienceData(data),
  });

  // define experience content sections
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

  // accordion on click handler
  const onAccordionButtonClick = (e) => {
    const accordionSelected = e.target.value;

    if (!setExpandedAccordion) {
      setCanExecuteAnimation(true);
    } else {
      setCanExecuteAnimation(false);
    }

    if (accordionSelected === expandedAccordion) {
      setExpandedAccordion(null);
    } else {
      setExpandedAccordion(accordionSelected);
    }
  };

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
      <ExperiencePageContainer ref={pageRef}>
        <div ref={introRef}>
          <HeroImage
            src={experienceData.page.image.url}
            description={experienceData.page.image.description}
          />
          <OuterContainer>
            <HeadingFirst isPageHeading variant="menuFontColor">
              {experienceData.page.title}
            </HeadingFirst>
          </OuterContainer>
        </div>
        <OuterContainer>
          {/* Profile section */}
          <ExperiencePageSection id="profile" ref={profileRef}>
            <RichTextWriteUp
              data={experienceContent.Profile.content.json}
              variant="primaryFont"
              isLarge
            />
          </ExperiencePageSection>

          {/* Work section */}
          <ExperiencePageSection id="work" ref={workRef}>
            <HeadingSecond>{experienceContent.Work.title}</HeadingSecond>

            {experienceContent.Work.accordionItemsCollection.items.map(
              (item) => (
                <Accordion
                  key={item.sys.id}
                  data={item}
                  onClick={onAccordionButtonClick}
                  expandedAccordionSection={expandedAccordion}
                  canExecuteAnimation={canExecuteAnimation}
                  setCanExecuteAnimation={setCanExecuteAnimation}
                />
              )
            )}
          </ExperiencePageSection>

          {/* Skills section */}
          <ExperiencePageSection id="skills" ref={skillsRef}>
            <HeadingSecond>{experienceContent.Skills.title}</HeadingSecond>
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
          <ExperiencePageSection id="education" ref={educationRef}>
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
