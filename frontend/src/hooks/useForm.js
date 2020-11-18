import { useCallback, useReducer } from 'react';

// validator function
export const validate = (value, validators) => {
  let isValid = true;

  // input is valid if no validators defined. prevents validators is undefined in line 29
  if (!validators) {
    isValid = true;
  }

  const regex = new RegExp(validators);

  isValid = isValid && regex.test(value);

  return isValid;
};

//set up reducer function
// reducer function that receives: (1) an action (2) the current state. It updates the current state based on the action
const formReducer = (state, action) => {
  // switch statement to find out what action is happening
  switch (action.type) {
    // case for if the input changes
    case 'INPUT_CHANGE':
      // a variable for overall form validity
      let formIsValid = true;

      // go through all the inputs (ie. title and description) in my formState to confirm if they are all valid using a form in loop
      // return a new state object
      for (const inputId in state.inputs) {
        // if there are no inputs that match the inputId for the specific input, just continue onto the next input, without finishing this for loop (skip the input)
        if (!state.inputs[inputId]) {
          continue;
        }
        // if the input I'm currently looking at is the one being updated (matches the action (INPUT_CHANGE) input)
        // NOTE inputId = name of the input (ie. address)
        if (inputId === action.inputId) {
          // combine the formIsValid variable and the action's validity to get the boolean
          formIsValid = formIsValid && action.isValid;
        } else {
          // if the input I'm currently looking at does NOT match the one being updated
          // combine the formIsValid variable and the input I'm currently looking at (ie. description if TITLE is the one being updated)
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }

        // ^^ IF WE HAVE ONE FALSE VALIDITY ANYWHERE, THE OVERALL FORM VALIDITY WILL BE FALSE!
      }

      return {
        // return a copy of the old state using spread
        ...state,
        // set inputs to the current input state
        inputs: {
          ...state.inputs,
          // override with the input state we're updating (input that's being changed) with the INPUT_CHANGE action
          [action.inputId]: {
            // input the new value and isValid off the action, because that's what's updating
            value: action.value,
            isValid: action.isValid,
          },
        },
        isValid: formIsValid, // grab this off the variable, as we update it above
      };

    // handle case for SET_DATA
    case 'SET_DATA':
      // return a new form state the overrides the existing state
      return {
        inputs: action.inputs, // set the inputs to the inputData argument passed into the function
        isValid: action.formIsValid, // set the isValid to the formValidity argument passed into the function
      };

    // the default where we just return the state
    default:
      return state;
  }
};

export const useForm = (initialInputs, initialFormValidity) => {
  // use useReducer to manage entire form state
  // pass in: (1) the reducer function (formReducer); (2) the initial state
  // array de-structure to grab (1) formState (the inputs and isValid); (2) dispatch function (useReducer)
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: initialInputs, // an object that stores information about each input
    isValid: initialFormValidity, // stores if the overall form is valid
  });

  // use useCallback to wrap the function and stop in from performing in a loop --> parent updates child, child updates parent, etc.
  const inputHandler = useCallback((id, value, isValid) => {
    // set up a new dispatch function with (1) the action type as 'INPUT_CHANGE'; (2) value = the value argument that's passed up to the function from the input; (3) isValid = the isValid argument that's passed up to the function from the input; (4) inputId = the id argument that's passed up to the function from the input;
    dispatch({ type: 'INPUT_CHANGE', value, isValid, inputId: id });
  }, []); // no dependencies that should trigger a re-render

  // function to replace/update inputs
  const setFormData = useCallback((inputData, formValidity) => {
    // dispatch new action
    dispatch({
      type: 'SET_DATA',
      inputs: inputData, // passed in argument
      formIsValid: formValidity, // passed in argument
    });
  }, []);

  // return an array containing (1) the form state; (2) input handler function (3) setFormData
  return [formState, inputHandler, setFormData];
};
