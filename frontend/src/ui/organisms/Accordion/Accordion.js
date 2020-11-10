import React from 'react';
import PropTypes from 'prop-types';
import {
  TopContainer,
  AccordionHeadingContainer,
  AccordionButtonContainer,
  AccordionButton,
  FontAwesomeIcon,
  AccordionContentContainer,
  AccordionContainer,
} from '../../atoms/AccordionElements/AccordionElements';
import Uppercase from '../../atoms/Typography/Uppercase';
import HeadingThird from '../../atoms/Typography/HeadingThird';
import RichTextWriteUp from '../../molecules/RichText/RichTextWriteUp/RIchTextWriteUp';

const Accordion = ({
  data,
  onClick,
  expandedAccordionSection,
  canExecuteAnimation,
  setCanExecuteAnimation,
}) => {
  // define isExpanded
  const isExpanded = data.sys.id === expandedAccordionSection;

  return (
    <AccordionContainer key={data.sys.id}>
      <TopContainer>
        <AccordionHeadingContainer>
          {data.workplace ? (
            <HeadingThird>
              <Uppercase>{data.jobTitle}</Uppercase>, {data.workplace}
            </HeadingThird>
          ) : (
            <HeadingThird>
              <Uppercase>{data.jobTitle}</Uppercase>
            </HeadingThird>
          )}
        </AccordionHeadingContainer>
        <AccordionButtonContainer>
          <AccordionButton value={data.sys.id} onClick={onClick}>
            <FontAwesomeIcon isHiding={isExpanded ? 'true' : 'false'} />
          </AccordionButton>
        </AccordionButtonContainer>
      </TopContainer>

      <AccordionContentContainer
        isExpanded={isExpanded}
        canExecuteAnimation={canExecuteAnimation}
        setCanExecuteAnimation={setCanExecuteAnimation}
      >
        <RichTextWriteUp
          data={data.accordionContent.json}
          variant="primaryFont"
          isLarge
        />
      </AccordionContentContainer>
    </AccordionContainer>
  );
};

export default Accordion;

Accordion.propTypes = {
  data: PropTypes.shape({
    accordionContent: PropTypes.shape({
      json: PropTypes.object,
    }).isRequired,
    jobTitle: PropTypes.string.isRequired,
    sys: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
    workplace: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  expandedAccordionSection: PropTypes.string,
  canExecuteAnimation: PropTypes.bool.isRequired,
  setCanExecuteAnimation: PropTypes.func.isRequired,
};

Accordion.defaultProps = {
  expandedAccordionSection: undefined,
};
