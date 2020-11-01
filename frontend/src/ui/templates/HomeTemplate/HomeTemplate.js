import React, { useState } from 'react';
import GET_PAGE from '../../../apollo/get_page';
import { useQuery } from '@apollo/client';
import { HomePageContainer, Headshot } from './HomeTemplate.styles';
import { UseResponsive } from '../../../hooks/useResponsive';
import RichTextWriteUp from '../../molecules/RichText/RichTextWriteUp/RIchTextWriteUp';
import { OuterContainer } from '../../atoms/Containers/Containers';

const HomeTemplate = () => {
  const [homeData, setHomeData] = useState();

  // define window height
  const { windowHeight } = UseResponsive();

  // Apollo query
  const { error, loading } = useQuery(GET_PAGE, {
    variables: { id: '5NDUJLUkiLqJOqlNFjzOrn' },
    onCompleted: (data) => setHomeData(data),
  });

  if (loading) {
    return (
      <OuterContainer>
        <HomePageContainer minHeight={windowHeight}>
          <p>Loading</p>
        </HomePageContainer>
      </OuterContainer>
    );
  }

  if (error) {
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
