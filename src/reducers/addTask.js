import { combineReducers } from 'redux';

import {
  UPDATE_ADD_TASK_FIELD,
  CLEAR_ADD_TASK_FIELDS,
} from '../actions/addTask.js';

const initialState = {
  newTask: {},
}

function newTask(state=initialState.newTask, action={}) {
  switch (action.type) {
    case UPDATE_ADD_TASK_FIELD:
      return {
        ...state,
        [action.field]: action.value
      };
    case CLEAR_ADD_TASK_FIELDS:
      return initialState.newTask;
    default:
      return initialState.newTask;
  }
}

export default combineReducers({
  newTask,
});
