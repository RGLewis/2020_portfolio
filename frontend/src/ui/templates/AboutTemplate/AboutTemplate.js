import React, { useState } from 'react';
import GET_PAGE from '../../../apollo/get_page';
import { useQuery } from '@apollo/client';
import { AboutPageContainer } from './AboutTemplate.styles';
import HeroImage from '../../atoms/HeroImage/HeroImage';
import { OuterContainer } from '../../atoms/Containers/Containers';
import HeadingFirst from '../../atoms/Typography/HeadingFirst';
import RichTextWriteUp from '../../molecules/RichText/RichTextWriteUp/RIchTextWriteUp';

const AboutTemplate = () => {
  const [aboutData, setAboutData] = useState();

  // Apollo query
  const { error, loading } = useQuery(GET_PAGE, {
    variables: { id: '31UVHLfeMnD3IkrxYABve8' },
    onCompleted: (data) => setAboutData(data),
  });

  if (loading) {
    return (
      <AboutPageContainer>
        <p>Loading</p>
      </AboutPageContainer>
    );
  }

  if (error) {
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
            variant="primary"
            isLarge
          />
        </OuterContainer>
      </AboutPageContainer>
    );
  }
};

export default AboutTemplate;
