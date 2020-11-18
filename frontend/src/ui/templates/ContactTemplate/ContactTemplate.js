import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ContactPageContainer } from './ContactTemplate.styles';
import HeroImage from '../../atoms/HeroImage/HeroImage';
import {
  OuterContainer,
  FullHeightFlexContainer,
} from '../../atoms/Containers/Containers';
import HeadingFirst from '../../atoms/Typography/HeadingFirst';
import ContactForm from '../../organisms/ContactForm/ContactForm';
import axios from 'axios';
import Loader from '../../molecules/Loader/Loader';

const ContactTemplate = ({ data }) => {
  const [contactData, setContactData] = useState();
  const [formSent, setFormSent] = useState(false);
  const [formResponseLoading, setFormResponseLoading] = useState(false);
  const [formError, setFormError] = useState(false);

  // set data
  useEffect(() => {
    if (data.fetchedData) {
      setContactData(data.fetchedData);
    }
  }, [data]);

  const handleFormSubmit = (formObj) => {
    setFormResponseLoading(true);
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
          setFormSent(true);
          setFormResponseLoading(false);
        } else if (response.data.status === 'fail') {
          setFormSent(true);
          setFormError(true);
          setFormResponseLoading(false);
        }
      });
  };

  if (data.loading) {
    return (
      <OuterContainer>
        <FullHeightFlexContainer>
          <Loader />
        </FullHeightFlexContainer>
      </OuterContainer>
    );
  }

  if (data.error || formError) {
    return (
      <OuterContainer>
        <FullHeightFlexContainer>
          <p>Error</p>
        </FullHeightFlexContainer>
      </OuterContainer>
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
            <ContactForm
              data={formData}
              handleFormSubmit={handleFormSubmit}
              formResponseLoading={formResponseLoading}
            />
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
