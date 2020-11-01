import React, { useState } from 'react';
import GET_HOMEPAGE from '../../../apollo/get_homepage';
import { useQuery } from '@apollo/client';
import { HomepageContainer, Headshot } from './HomeTemplate.styles';
import { UseResponsive } from '../../../hooks/useResponsive';
import RichTextWriteUp from '../../molecules/RichText/RichTextWriteUp/RIchTextWriteUp';

const HomeTemplate = () => {
  const [homeData, setHomeData] = useState();

  // define window height
  const { windowHeight } = UseResponsive();

  // Apollo query
  const { error, loading } = useQuery(GET_HOMEPAGE, {
    onCompleted: (data) => setHomeData(data),
  });

  console.log(homeData);

  if (loading) {
    return (
      <HomepageContainer minHeight={windowHeight}>
        <p>Loading</p>
      </HomepageContainer>
    );
  }

  if (error) {
    return (
      <HomepageContainer minHeight={windowHeight}>
        <p>Error</p>
      </HomepageContainer>
    );
  }

  if (!homeData) {
    return '';
  }

  if (homeData) {
    return (
      <HomepageContainer minHeight={windowHeight}>
        <Headshot
          src={homeData.page.image.url}
          alt={homeData.page.image.description}
        />
        <RichTextWriteUp
          data={homeData.page.componentsCollection.items[0].content.json}
          variant="primary"
          isUnderlined
        />
      </HomepageContainer>
    );
  }
};

export default HomeTemplate;
