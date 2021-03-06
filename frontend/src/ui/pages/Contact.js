import React from 'react';
import PropTypes from 'prop-types';
import ContactTemplate from '../templates/ContactTemplate/ContactTemplate';

const Contact = ({ data }) => <ContactTemplate data={data} />;

export default Contact;

Contact.propTypes = {
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

Contact.defaultProps = {
  data: { error: undefined, fetchedData: undefined },
};
