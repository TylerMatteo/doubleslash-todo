import {
  CREATE_TODO,
  DELETE_TODO,
  UPDATE_TODO_FIELD,
  MARK_TODO_AS_COMPLETED,
  UNDO_TODO_COMPLETE,
  TOGGLE_TODO_EDIT_MODE,
  UPDATE_EDIT_TASK_FIELD
} from '../actions/todos.js';
import { guid } from '../helpers/util.js';
import { fromJS } from 'immutable';

const initialState = [];

export default function todos(state=initialState, action={}) {
  switch (action.type) {
    case CREATE_TODO:
      const id = guid();
      return {
        ...state,
        [id]: {
          title: action.title,
          description: action.description,
          created: action.created,
          completed: false,
          edit: false
        }
      }
    case DELETE_TODO:
      return fromJS(state).delete(action.id).toJS();
    case UPDATE_TODO_FIELD:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          [action.field]: action.value,
        }
      };
    case MARK_TODO_AS_COMPLETED:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          completed: true,
        }
      }
    case UNDO_TODO_COMPLETE:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          completed: false,
        }
      }
    case TOGGLE_TODO_EDIT_MODE:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          edit: !state[action.id].edit,
        }
      }
    case UPDATE_EDIT_TASK_FIELD:
      return {
        ...state,
        
      }
    default:
      return state;
  }
}
