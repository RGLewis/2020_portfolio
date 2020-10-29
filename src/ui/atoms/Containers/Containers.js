import React from 'react';
import PropTypes from 'prop-types';
import {StyledOuterContainer, StyledMainContentContainer} from './Containers.styles';

export const OuterContainer = ({ children }) => (
  <StyledOuterContainer>{children}</StyledOuterContainer>
);

OuterContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export const MainContentContainer = ({children}) => (
<StyledMainContentContainer>{children}</StyledMainContentContainer>
)

MainContentContainer.propTypes = {
  children: PropTypes.node.isRequired,
};