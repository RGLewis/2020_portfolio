import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ContactPageContainer } from './ContactTemplate.styles';
import HeroImage from '../../atoms/HeroImage/HeroImage';
import {
  OuterContainer,
  FullHeightFlexContainer,
} from '../../atoms/Containers/Containers';
import HeadingFirst from '../../atoms/Typography/HeadingFirst';
import ErrorBody from '../../atoms/Typography/ErrorBody';
import RichTextWriteUpLink from '../../atoms/RichTextWriteUpLink/RichTextWriteUpLink';
import RichTextWriteUp from '../../molecules/RichText/RichTextWriteUp/RIchTextWriteUp';
import ContactForm from '../../organisms/ContactForm/ContactForm';
import axios from 'axios';
import Loader from '../../molecules/Loader/Loader';
import ErrorImg from '../../../static/assets/matthew-henry-hnYMacpvKZY-unsplash.jpg';
import StaticCopy from '../../../static/copy/copy';

const ContactTemplate = ({ data }) => {
  // hooks
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
      .post('/contact-backend', {
        //make an object to be handled from req.body on the backend.
        email: formObj.email,
        name: formObj.name,
        subject: formObj.subject,
        message: formObj.message,
      })
      .then((response) => {
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
      <ContactPageContainer>
        <HeroImage
          src={ErrorImg}
          description="Photo by Matthew Henry on Unsplash - selective focus photography of fawn pug puppy"
          isVerticalTop={false}
        />
        <OuterContainer>
          <HeadingFirst isPageHeading variant="menuFontColor">
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
        </OuterContainer>
      </ContactPageContainer>
    );
  }

  if (!contactData) {
    return '';
  }

  if (contactData) {
    // define formData / thank you data
    const formData = contactData.page.componentsCollection.items.filter(
      (item) => item.title === 'Contact'
    );

    const thankYouData = contactData.page.componentsCollection.items.filter(
      (item) => item.title === 'Email Confirm'
    );

    const thankYouJSON = thankYouData[0].content.json;

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
            <RichTextWriteUp
              data={thankYouJSON}
              variant="primaryFont"
              isLarge
            />
          ) : (
            <ContactForm
              data={formData[0]}
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
