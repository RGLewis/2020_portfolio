import React, { useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';

// import just the validate function
import { validate } from '../../../../hooks/useForm';
import ErrorMessage from '../../ErrorMessage/ErrorMessage';

import {
  StyledLabel,
  StyledInput,
  StyledTextArea,
  InputContainer,
} from './Input.styles';

// reducer function that receives: (1) an action (2) the current state. It updates the current state based on the action
const inputReducer = (state, action) => {
  // switch statement to find out what action is happening
  switch (action.type) {
    // on the CHANGE action (input changes)
    case 'CHANGE':
      // return a new state object
      return {
        // return a copy of the old state with the spread
        ...state,
        // update selected properties
        value: action.val,
        isValid: validate(action.val, action.validators), // call the validate function to check if the input is valid, passing in (1) user input; (2) the validators passed into the input
      };
    // on the TOUCH action (input blur)
    case 'TOUCH': {
      return {
        // return a copy of the old state
        ...state,
        // update the isTouched property
        isTouched: true,
      };
    }

    // default case will return the existing (unchanged) state
    default:
      return state;
  }
};

const Input = ({
  label,
  id,
  elementType,
  type,
  rows,
  placeholder,
  errorMessage,
  validators,
  onInput,
  initialValue,
  initialValid,
}) => {
  // call useReducer, pass in the reducer function and the initial state (object, optional)
  // use array destructuring to get two elements out of the useReducer function: (1) current state (inputState); (2) dispatch function we can call to dispatch action to the reducer function (inputReducer)
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: initialValue || '',
    isTouched: false,
    isValid: initialValid || false,
  }); // initial input states

  // grab value and isValid from input state to use as dependencies in useEffect
  const { value, isValid } = inputState;

  // run this useEffect to track value and isValid
  useEffect(() => {
    onInput(id, inputState.value, inputState.isValid); // on change function passed from parent --> pass in the id, value and isValid
  }, [id, onInput, value, isValid]);

  // input change handler
  const changeHandler = (e) => {
    // call the dispatch function we get from useReducer
    // pass an action object (has a type and val property)
    // NOTE: type has to be one that we set out in our inputReducer switch case
    // also pass in the array of validators that are coming in as props
    dispatch({ type: 'CHANGE', val: e.target.value, validators: validators });
  };

  // function to track on blur
  const touchHandler = () => {
    dispatch({
      type: 'TOUCH', // create a new action type to account for the blur (touch)
    });
  };

  const element =
    elementType === 'input' ? (
      <StyledInput
        id={id}
        type={type}
        placeholder={placeholder}
        onBlur={touchHandler} // when user loses focus -- check to make sure the user already clicked into the input before showing it as invalid (so it's not invalid on page load)
        onChange={changeHandler}
        value={inputState.value} // grabbing inputState off useReducer
        isAlert={!inputState.isValid && inputState.isTouched}
      />
    ) : (
      <StyledTextArea
        id={id}
        rows={rows || 3}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
        isAlert={!inputState.isValid && inputState.isTouched}
      />
    );

  return (
    <>
      <InputContainer>
        {element}

        <StyledLabel htmlFor={id} isFloating={value}>
          {label}
        </StyledLabel>
      </InputContainer>

      <ErrorMessage isShowing={!inputState.isValid && inputState.isTouched}>
        {errorMessage}
      </ErrorMessage>
    </>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  elementType: PropTypes.oneOf(['input', 'textarea']),
  type: PropTypes.string,
  rows: PropTypes.number,
  placeholder: PropTypes.string,
  errorMessage: PropTypes.string,
  validators: PropTypes.string,
  onInput: PropTypes.func.isRequired,
  initialValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  initialValid: PropTypes.bool,
};

Input.defaultProps = {
  elementType: 'input',
  type: 'text',
  rows: 3,
  placeholder: '',
  errorMessage: '',
  initialValue: '',
  initialValid: false,
  validators: '',
};

export default Input;
