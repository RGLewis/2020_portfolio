import React from 'react';
import PropTypes from 'prop-types';
import HomeTemplate from '../templates/HomeTemplate/HomeTemplate';

const Home = ({ data }) => <HomeTemplate data={data} />;

export default Home;

Home.propTypes = {
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

Home.defaultProps = {
  data: { error: undefined, fetchedData: undefined },
};
