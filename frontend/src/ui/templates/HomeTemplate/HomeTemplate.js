import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Headshot } from './HomeTemplate.styles';
import RichTextWriteUp from '../../molecules/RichText/RichTextWriteUp/RIchTextWriteUp';
import {
  OuterContainer,
  FullHeightFlexContainer,
} from '../../atoms/Containers/Containers';
import Loader from '../../molecules/Loader/Loader';
import HeadingFirst from '../../atoms/Typography/HeadingFirst';
import HeadingThird from '../../atoms/Typography/HeadingThird';
import ErrorBody from '../../atoms/Typography/ErrorBody';
import RichTextWriteUpLink from '../../atoms/RichTextWriteUpLink/RichTextWriteUpLink';
import ErrorImg from '../../../static/assets/matthew-henry-hnYMacpvKZY-unsplash.jpg';
import StaticCopy from '../../../static/copy/copy';

const HomeTemplate = ({ data }) => {
  const [homeData, setHomeData] = useState();

  // set data
  useEffect(() => {
    if (data.fetchedData) {
      setHomeData(data.fetchedData);
    }
  }, [data]);

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
      <OuterContainer>
        <FullHeightFlexContainer>
          <Headshot
            src={ErrorImg}
            description="Photo by Matthew Henry on Unsplash - selective focus photography of fawn pug puppy"
          />

          <HeadingFirst
            variant="primaryFont"
            isPageHeading={false}
            isUnderlined
          >
            {StaticCopy.general.headline}
          </HeadingFirst>

          <ErrorBody>
            {data.error ? StaticCopy.general.body : StaticCopy.form.body}{' '}
            <RichTextWriteUpLink
              href="mailto:rafaela.codes@gmail.com"
              variant="alert"
            >
              send an email
            </RichTextWriteUpLink>
            .
          </ErrorBody>
        </FullHeightFlexContainer>
      </OuterContainer>
    );
  }

  if (!homeData) {
    return '';
  }

  if (homeData) {
    return (
      <OuterContainer>
        <FullHeightFlexContainer>
          <Headshot
            src={homeData.page.image.url}
            alt={homeData.page.image.description}
          />
          <RichTextWriteUp
            data={homeData.page.componentsCollection.items[0].content.json}
            variant="primaryFont"
            isUnderlined
          />
        </FullHeightFlexContainer>
      </OuterContainer>
    );
  }
};

export default HomeTemplate;

HomeTemplate.propTypes = {
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

HomeTemplate.defaultProps = {
  data: { error: undefined, fetchedData: undefined },
};
