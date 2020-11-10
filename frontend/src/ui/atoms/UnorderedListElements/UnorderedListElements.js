import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledListItem,
  StyledUnorderedList,
} from './UnorderedListElements.styles';

export const UnorderedList = ({ orientation, children, hasBullets }) => (
  <StyledUnorderedList orientation={orientation} hasBullets={hasBullets}>
    {children}
  </StyledUnorderedList>
);

UnorderedList.propTypes = {
  children: PropTypes.node.isRequired,
  orientation: PropTypes.oneOf(['vertical', 'horizontal']),
  hasBullets: PropTypes.bool,
};

UnorderedList.defaultProps = {
  orientation: 'horizontal',
  hasBullets: false,
};

export const ListItem = ({ orientation, children, spaceBetween }) => (
  <StyledListItem orientation={orientation} spaceBetween={spaceBetween}>
    {children}
  </StyledListItem>
);

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
  orientation: PropTypes.oneOf(['vertical', 'horizontal']),
  spaceBetween: PropTypes.bool,
};

ListItem.defaultProps = {
  orientation: 'horizontal',
  spaceBetween: true,
};
