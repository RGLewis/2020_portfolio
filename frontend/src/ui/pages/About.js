import React from 'react';
import PropTypes from 'prop-types';
import AboutTemplate from '../templates/AboutTemplate/AboutTemplate';

const About = ({ data }) => <AboutTemplate data={data} />;

export default About;

About.propTypes = {
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

About.defaultProps = {
  data: { error: undefined, fetchedData: undefined },
};
