import React, { useState, useRef, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../../../context/context';
import { UseResponsive } from '../../../hooks/useResponsive';
import HeroImage from '../../atoms/HeroImage/HeroImage';
import {
  OuterContainer,
  FullHeightFlexContainer,
} from '../../atoms/Containers/Containers';
import HeadingFirst from '../../atoms/Typography/HeadingFirst';
import HeadingSecond from '../../atoms/Typography/HeadingSecond';
import RichTextWriteUp from '../../molecules/RichText/RichTextWriteUp/RIchTextWriteUp';
import SkillsItem from '../../molecules/SkillsItem/SkillsItem';
import Accordion from '../../organisms/Accordion/Accordion';
import ErrorBody from '../../atoms/Typography/ErrorBody';
import RichTextWriteUpLink from '../../atoms/RichTextWriteUpLink/RichTextWriteUpLink';
import Loader from '../../molecules/Loader/Loader';
import ErrorImg from '../../../static/assets/matthew-henry-hnYMacpvKZY-unsplash.jpg';
import StaticCopy from '../../../static/copy/copy';
import {
  ExperiencePageContainer,
  ExperiencePageSection,
} from './ExperienceTemplate.styles';

const ExperienceTemplate = ({ data }) => {
  // define context
  const context = useContext(Context);

  // hooks
  const [experienceData, setExperienceData] = useState();
  const [expandedAccordion, setExpandedAccordion] = useState();
  const [canExecuteAnimation, setCanExecuteAnimation] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  // use responsive
  const { windowHeight, windowWidth } = UseResponsive();

  // Set data
  useEffect(() => {
    if (data.fetchedData) {
      setExperienceData(data.fetchedData);
    }
  }, [data]);

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

      let offset = lastSection / 2;

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

  // watch scroll position and update active section -- manually subtract 100 from intro height to account for profile section offset
  useEffect(() => {
    if (scrollPosition <= intro - 200) {
      context.setExperienceSection('Intro');

      // update url
      window.history.pushState('Experience', 'Experience', '/experience');
    } else if (
      scrollPosition > intro - 200 &&
      scrollPosition <= profileHeight
    ) {
      context.setExperienceSection('Profile');

      // update url
      window.history.pushState('Profile', 'Profile', '/experience#profile');
    } else if (scrollPosition > profileHeight && scrollPosition <= workHeight) {
      context.setExperienceSection('Work');

      // update url
      window.history.pushState('Work', 'Work', '/experience#work');
    } else if (scrollPosition > workHeight && scrollPosition <= skillsHeight) {
      context.setExperienceSection('Skills');

      // update url
      window.history.pushState('Skills', 'Skills', '/experience#skills');
    } else if (
      scrollPosition > skillsHeight &&
      scrollPosition <= educationHeight
    ) {
      context.setExperienceSection('Education');

      // update url
      window.history.pushState(
        'Education',
        'Education',
        '/experience#education'
      );
    }
  }, [scrollPosition]);

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

  if (data.loading) {
    return (
      <OuterContainer>
        <FullHeightFlexContainer>
          <Loader />
        </FullHeightFlexContainer>
      </OuterContainer>
    );
  }

  if (data.error) {
    return (
      <ExperiencePageContainer>
        <HeroImage
          src={ErrorImg}
          description="Photo by Matthew Henry on Unsplash - selective focus photography of fawn pug puppy"
          isVerticalTop={false}
        />
        <OuterContainer>
          <HeadingFirst isPageHeading variant="menuFontColor">
            {StaticCopy.general.headline}
          </HeadingFirst>

          <ErrorBody>
            {StaticCopy.general.body}{' '}
            <RichTextWriteUpLink
              href="mailto:rafaela.codes@gmail.com"
              variant="alert"
            >
              send an email
            </RichTextWriteUpLink>
            .
          </ErrorBody>
        </OuterContainer>
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

ExperienceTemplate.propTypes = {
  data: PropTypes.shape({
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    fetchedData: PropTypes.shape({
      page: PropTypes.shape({
        componentsCollection: PropTypes.shape({
          items: PropTypes.array,
        }),
        image: PropTypes.shape({
          description: PropTypes.string,
          url: PropTypes.string,
        }),
        title: PropTypes.string,
      }),
    }),
  }).isRequired,
};

ExperienceTemplate.defaultProps = {
  data: { error: undefined, fetchedData: undefined },
};
