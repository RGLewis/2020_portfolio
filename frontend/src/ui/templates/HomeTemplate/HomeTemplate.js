import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { HomePageContainer, Headshot } from './HomeTemplate.styles';
import { UseResponsive } from '../../../hooks/useResponsive';
import RichTextWriteUp from '../../molecules/RichText/RichTextWriteUp/RIchTextWriteUp';
import { OuterContainer } from '../../atoms/Containers/Containers';

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
        <HomePageContainer minHeight={windowHeight}>
          <p>Loading</p>
        </HomePageContainer>
      </OuterContainer>
    );
  }

  if (data.error) {
    return (
      <OuterContainer>
        <HomePageContainer minHeight={windowHeight}>
          <p>Error</p>
        </HomePageContainer>
      </OuterContainer>
    );
  }

  if (!homeData) {
    return '';
  }

  if (homeData) {
    return (
      <OuterContainer>
        <HomePageContainer minHeight={windowHeight}>
          <Headshot
            src={homeData.page.image.url}
            alt={homeData.page.image.description}
          />
          <RichTextWriteUp
            data={homeData.page.componentsCollection.items[0].content.json}
            variant="primaryFont"
            isUnderlined
          />
        </HomePageContainer>
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
