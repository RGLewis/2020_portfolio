import React from 'react';
import PropTypes from 'prop-types';
import {
  LoaderElementContainer,
  LoaderContentContainer,
  Dot,
} from '../../atoms/LoaderElements/LoaderElements';

const Loader = ({ isButton, variant }) => (
  <LoaderElementContainer isButton={isButton}>
    <LoaderContentContainer>
      <Dot isButton={isButton} variant={variant} />
      <Dot isButton={isButton} variant={variant} />
      <Dot isButton={isButton} variant={variant} />
    </LoaderContentContainer>
  </LoaderElementContainer>
);

export default Loader;

Loader.propTypes = {
  isButton: PropTypes.bool,
  variant: PropTypes.oneOf(['white', 'accent']),
};

Loader.defaultProps = {
  isButton: false,
  variant: 'accent',
};
