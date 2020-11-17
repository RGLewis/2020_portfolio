import React from 'react';
import PropTypes from 'prop-types';
import ExperienceTemplate from '../templates/ExperienceTemplate/ExperienceTemplate';

const Experience = ({ data }) => <ExperienceTemplate data={data} />;

export default Experience;

Experience.propTypes = {
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

Experience.defaultProps = {
  data: { error: undefined, fetchedData: undefined },
};
