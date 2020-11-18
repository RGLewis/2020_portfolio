import React from 'react';
import PropTypes from 'prop-types';
import { StyledHeroImage } from './HeroImage.styles';

const HeroImage = ({ src, description, isVerticalTop }) => (
  <StyledHeroImage
    title={description}
    src={src}
    isVerticalTop={isVerticalTop}
  />
);

export default HeroImage;

HeroImage.propTypes = {
  src: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isVerticalTop: PropTypes.bool,
};

HeroImage.defaultProps = {
  isVerticalTop: true,
};
