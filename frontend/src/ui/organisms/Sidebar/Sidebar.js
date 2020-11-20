import React from 'react';
import PropTypes from 'prop-types';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import { UseResponsive } from '../../../hooks/useResponsive';

import { StyledSidebar } from './Sidebar.styles';

const Sidebar = ({ navData, footerData }) => {
  const { windowWidth } = UseResponsive();
  const isDesktop = windowWidth >= 992;

  return isDesktop ? (
    <StyledSidebar>
      <Nav data={navData} />
      <Footer data={footerData} />
    </StyledSidebar>
  ) : null;
};

export default Sidebar;

Sidebar.propTypes = {
  navData: PropTypes.shape({
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    fetchedData: PropTypes.shape({
      navigation: PropTypes.shape({
        ctAsCollection: PropTypes.shape({
          items: PropTypes.array,
        }),
        headline: PropTypes.string,
        subHeading: PropTypes.string,
        title: PropTypes.string,
      }),
    }),
  }).isRequired,
  footerData: PropTypes.shape({
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    fetchedData: PropTypes.shape({
      footer: PropTypes.shape({
        copyright: PropTypes.string,
        footerItemsCollection: PropTypes.shape({
          items: PropTypes.array,
        }),
        techStack: PropTypes.string,
        title: PropTypes.string,
      }),
    }),
  }).isRequired,
};

Sidebar.defaultProps = {
  navData: { error: undefined, fetchedData: undefined },
  footerData: { error: undefined, fetchedData: undefined },
};
