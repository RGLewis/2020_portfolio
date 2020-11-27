import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { AboutPageContainer } from './AboutTemplate.styles';
import HeroImage from '../../atoms/HeroImage/HeroImage';
import { OuterContainer } from '../../atoms/Containers/Containers';
import HeadingFirst from '../../atoms/Typography/HeadingFirst';
import RichTextWriteUp from '../../molecules/RichText/RichTextWriteUp/RIchTextWriteUp';
import ErrorBody from '../../atoms/Typography/ErrorBody';
import RichTextWriteUpLink from '../../atoms/RichTextWriteUpLink/RichTextWriteUpLink';
import Loader from '../../molecules/Loader/Loader';
import ErrorImg from '../../../static/assets/matthew-henry-hnYMacpvKZY-unsplash.jpg';
import StaticCopy from '../../../static/copy/copy';

const AboutTemplate = ({ data }) => {
  // hooks
  const [aboutData, setAboutData] = useState();

  // set data
  useEffect(() => {
    if (data.fetchedData) {
      setAboutData(data.fetchedData);
    }
  }, [data]);

  if (data.loading) {
    return (
      <OuterContainer>
        <Loader />
      </OuterContainer>
    );
  }

  if (data.error) {
    return (
      <AboutPageContainer>
        <HeroImage
          src={ErrorImg}
          description="Photo by Matthew Henry on Unsplash - selective focus photography of fawn pug puppy"
          isVerticalTop={false}
        />
        <OuterContainer>
          <HeadingFirst isPageHeading variant="white">
            {StaticCopy.general.headline}
          </HeadingFirst>

          <ErrorBody>
            {StaticCopy.general.body}{' '}
            <RichTextWriteUpLink
              href={`mailto:${process.env.REACT_APP_GMAIL}`}
              variant="alert"
            >
              send an email
            </RichTextWriteUpLink>
            .
          </ErrorBody>
        </OuterContainer>
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
          <HeadingFirst isPageHeading variant="white">
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
