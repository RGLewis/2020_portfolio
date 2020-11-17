import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { AboutPageContainer } from './AboutTemplate.styles';
import HeroImage from '../../atoms/HeroImage/HeroImage';
import { OuterContainer } from '../../atoms/Containers/Containers';
import HeadingFirst from '../../atoms/Typography/HeadingFirst';
import RichTextWriteUp from '../../molecules/RichText/RichTextWriteUp/RIchTextWriteUp';

const AboutTemplate = ({ data }) => {
  console.log({ data });
  const [aboutData, setAboutData] = useState();

  // set data
  useEffect(() => {
    if (data.fetchedData) {
      setAboutData(data.fetchedData);
    }
  }, [data]);

  if (data.loading) {
    return (
      <AboutPageContainer>
        <p>Loading</p>
      </AboutPageContainer>
    );
  }

  if (data.error) {
    return (
      <AboutPageContainer>
        <p>Error</p>
      </AboutPageContainer>
    );
  }

  if (!aboutData) {
    return '';
  }

  if (aboutData) {
    return (
      <AboutPageContainer>
        <HeroImage
          src={aboutData.page.image.url}
          description={aboutData.page.image.description}
        />
        <OuterContainer>
          <HeadingFirst isPageHeading variant="menuFontColor">
            {aboutData.page.title}
          </HeadingFirst>
          <RichTextWriteUp
            data={aboutData.page.componentsCollection.items[0].content.json}
            variant="primaryFont"
            isLarge
          />
        </OuterContainer>
      </AboutPageContainer>
    );
  }
};

export default AboutTemplate;

AboutTemplate.propTypes = {
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

AboutTemplate.defaultProps = {
  data: { error: undefined, fetchedData: undefined },
};
