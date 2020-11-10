import React from 'react';
import PropTypes from 'prop-types';
import {
  SkillsContainer,
  SkillsBar,
  LevelContainer,
  SkillsTitle,
  SkillsLabel,
} from '../../atoms/SkillsElements/SkillsElements';

const SkillsItem = ({ skillsTitle, level }) => (
  <SkillsContainer>
    <SkillsTitle>{skillsTitle}</SkillsTitle>
    <SkillsBar>
      <LevelContainer level={level}>
        <SkillsLabel>{level}</SkillsLabel>
      </LevelContainer>
    </SkillsBar>
  </SkillsContainer>
);

SkillsItem.propTypes = {
  skillsTitle: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
};

export default SkillsItem;
