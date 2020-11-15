import React from 'react';
import PropTypes from 'prop-types';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import { StyledSidebar } from './Sidebar.styles';

const Sidebar = ({ navData, footerData }) => (
  <StyledSidebar>
    <Nav data={navData} />
    <Footer data={footerData} />
  </StyledSidebar>
);

export default Sidebar;
