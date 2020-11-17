import React from 'react';
import PropTypes from 'prop-types';

const ContactTemplate = ({ data }) => {
  return <h1>Contact</h1>;
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
