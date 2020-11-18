import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Headshot } from './HomeTemplate.styles';
import { UseResponsive } from '../../../hooks/useResponsive';
import RichTextWriteUp from '../../molecules/RichText/RichTextWriteUp/RIchTextWriteUp';
import {
  OuterContainer,
  FullHeightFlexContainer,
} from '../../atoms/Containers/Containers';
import Loader from '../../molecules/Loader/Loader';

const HomeTemplate = ({ data }) => {
  const [homeData, setHomeData] = useState();

  // set data
  useEffect(() => {
    if (data.fetchedData) {
      setHomeData(data.fetchedData);
    }
  }, [data]);

  // define window height
  const { windowHeight } = UseResponsive();

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
          <p>Error</p>
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
