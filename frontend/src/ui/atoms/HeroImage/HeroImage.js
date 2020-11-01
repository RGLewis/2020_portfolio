import React from 'react';
import PropTypes from 'prop-types';
import { StyledHeroImage } from './HeroImage.styles';

const HeroImage = ({ src, description }) => (
  <StyledHeroImage title={description} src={src} />
);

export default HeroImage;

HeroImage.propTypes = {
  src: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
