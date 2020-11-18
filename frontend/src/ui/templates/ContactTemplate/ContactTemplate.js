import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ContactPageContainer } from './ContactTemplate.styles';
import HeroImage from '../../atoms/HeroImage/HeroImage';
import { OuterContainer } from '../../atoms/Containers/Containers';
import HeadingFirst from '../../atoms/Typography/HeadingFirst';
import ContactForm from '../../molecules/ContactForm/ContactForm';
import axios from 'axios';

const ContactTemplate = ({ data }) => {
  const [contactData, setContactData] = useState();
  const [formSent, setFormSent] = useState(false);
  const [formError, setFormError] = useState(false);

  // set data
  useEffect(() => {
    if (data.fetchedData) {
      setContactData(data.fetchedData);
    }
  }, [data]);

  const handleFormSubmit = (formObj) => {
    axios
      .post('/contact', {
        //make an object to be handled from req.body on the backend.
        email: formObj.email,
        name: formObj.name,
        subject: formObj.subject,
        message: formObj.message,
      })
      .then((response) => {
        console.log({ response });
        if (response.data.status === 'success') {
          console.log({ response });
          setFormSent(true);
        } else if (response.data.status === 'fail') {
          setFormSent(true);
          setFormError(true);
        }
      });
  };

  if (data.loading) {
    return (
      <ContactPageContainer>
        <p>Loading</p>
      </ContactPageContainer>
    );
  }

  if (data.error || formError) {
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
          {formSent ? (
            <HeadingFirst>Form has been sent!</HeadingFirst>
          ) : (
            <ContactForm data={formData} handleFormSubmit={handleFormSubmit} />
          )}
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
