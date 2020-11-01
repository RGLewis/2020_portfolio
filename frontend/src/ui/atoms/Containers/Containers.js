import React from 'react';
import PropTypes from 'prop-types';
import {StyledOuterContainer, StyledMainContentContainer} from './Containers.styles';
import { UseResponsive } from '../../../hooks/useResponsive'

export const OuterContainer = ({ children }) => (
  <StyledOuterContainer>{children}</StyledOuterContainer>
);

OuterContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export const MainContentContainer = ({children}) =>  {
const {windowHeight} = UseResponsive()

  return (
<StyledMainContentContainer minHeight={windowHeight}>{children}</StyledMainContentContainer>
)
  }

MainContentContainer.propTypes = {
  children: PropTypes.node.isRequired,
};