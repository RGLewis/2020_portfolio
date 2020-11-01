import React from 'react';
import Header from '../Header/Header';
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'

import {StyledSidebar} from './Sidebar.styles'

const Sidebar = () => (
    <StyledSidebar>
      <Nav />
      <Footer />
    </StyledSidebar>
  )


export default Sidebar