import React from 'react';
import PropTypes from 'prop-types';

import FormButton from '../../atoms/FormElements/FormButton/FormButton';
import { Emoji } from '../../atoms/FormElements/FormButton/FormButton.styles';

import { FormContainer } from '../../atoms/FormElements/FormElements.styles';
import Input from '../../atoms/FormElements/Input/Input';

import { useForm } from '../../../hooks/useForm';

const ContactForm = ({ data, handleFormSubmit }) => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const name = formState.inputs.name.value;
    const email = formState.inputs.email.value;
    const subject = formState.inputs.subject.value;
    const message = formState.inputs.message.value;

    handleFormSubmit({ name, email, subject, message });
  };

  // define emoji
  const wave = <Emoji aria-label="waving emoji">👋</Emoji>;

  // define the form inputs
  let formObject = {};

  data.inputsCollection.items.forEach((formInput) => {
    formObject[formInput.id] = { value: '', isValid: formInput.initialValid };
  });

  // call the useForm hook and pass in (1) initial inputs; (2) initial form validity
  // de-structure to grab the two array items return: formState and the inputHandler function
  const [formState, inputHandler] = useForm(
    formObject, // inputs to pass in
    true // initial form validity
  );

  return (
    <FormContainer onSubmit={handleOnSubmit}>
      {data.inputsCollection.items.map((input) => (
        <Input
          key={input.id}
          id={input.id}
          elementType={input.elementType}
          label={input.label}
          validators={input.regex}
          onInput={inputHandler}
          errorMessage={input.errorMessage}
          // initialValid={input.initialValid}
          name={input.title}
        />
      ))}
      <FormButton disabled={!formState.isValid} type={'submit'}>
        {data.submitPrompt} {wave}
      </FormButton>
    </FormContainer>
  );
};

export default ContactForm;
