import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledSkillsContainer,
  StyledSkillsBar,
  StyledLevelContainer,
} from './SkillsElements.styles';
import Body from '../Typography/Body';

export const SkillsContainer = ({ children }) => (
  <StyledSkillsContainer>{children}</StyledSkillsContainer>
);

SkillsContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export const SkillsBar = ({ children }) => (
  <StyledSkillsBar>{children}</StyledSkillsBar>
);

SkillsBar.propTypes = {
  children: PropTypes.node.isRequired,
};

export const LevelContainer = ({ children, level }) => (
  <StyledLevelContainer level={level}>{children}</StyledLevelContainer>
);

LevelContainer.propTypes = {
  children: PropTypes.node.isRequired,
  level: PropTypes.oneOf(['Comfortable', 'Advanced', 'Expert']).isRequired,
};

export const SkillsTitle = ({ children }) => (
  <Body isBold isLarge variant="accent">
    {children}
  </Body>
);

SkillsTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export const SkillsLabel = ({ children }) => (
  <Body variant="background" isBold>
    {children}
  </Body>
);

SkillsLabel.propTypes = {
  children: PropTypes.node.isRequired,
};
