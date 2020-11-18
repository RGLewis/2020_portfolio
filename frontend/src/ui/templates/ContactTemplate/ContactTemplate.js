import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ContactPageContainer } from './ContactTemplate.styles';
import HeroImage from '../../atoms/HeroImage/HeroImage';
import { OuterContainer } from '../../atoms/Containers/Containers';
import HeadingFirst from '../../atoms/Typography/HeadingFirst';
import Card from '../../atoms/Card/Card';
import ContactForm from '../../molecules/ContactForm/ContactForm';

const ContactTemplate = ({ data }) => {
  const [contactData, setContactData] = useState();

  // set data
  useEffect(() => {
    if (data.fetchedData) {
      setContactData(data.fetchedData);
    }
  }, [data]);

  if (data.loading) {
    return (
      <ContactPageContainer>
        <p>Loading</p>
      </ContactPageContainer>
    );
  }

  if (data.error) {
    return (
      <ContactPageContainer>
        <p>Error</p>
      </ContactPageContainer>
    );
  }

  if (!contactData) {
    return '';
  }

  if (contactData) {
    // define formData
    const formData = contactData.page.componentsCollection.items[0];

    return (
      <ContactPageContainer>
        <HeroImage
          src={contactData.page.image.url}
          description={contactData.page.image.description}
          isVerticalTop={false}
        />
        <OuterContainer>
          <HeadingFirst isPageHeading variant="menuFontColor">
            {contactData.page.title}
          </HeadingFirst>
          <ContactForm data={formData} />
        </OuterContainer>
      </ContactPageContainer>
    );
  }
};

export default ContactTemplate;

ContactTemplate.propTypes = {
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

ContactTemplate.defaultProps = {
  data: { error: undefined, fetchedData: undefined },
};
