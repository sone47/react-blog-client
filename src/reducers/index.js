import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import message from './message';
import user from './user';

const states = {
  message,
  user,
  form: formReducer
};

const _states = {};

for(let i in states) {
  _states[i] = states[i]();
}

export default combineReducers(states);

export const getInitialState = () => {
  return Object.assign({}, _states, {});
};