import { PROVIDERS_FIRST } from '../constants/ActionTypes';

/*
getState for accessing the current state of the application
dispatch for dispatching an action
subscribe for listening on state changes
*/

const initialState = {
  detailsStack: []
};

function rootReducer(state = initialState, action) {
  if (action.type === PROVIDERS_FIRST) {
    return { ...state, detailsStack: state.detailsStack.concat(action.payload) };
  }
  return state;
}

export default rootReducer;
