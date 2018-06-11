import { connect } from 'react-redux';

import TodoItemView from './TodoItemView';
import {
  deleteTodo,
  updateTodoField,
  markTodoAsComplete,
  undoTodoComplete,
  toggleTodoEditMode,
  updateEditField
} from '../../actions/todos.js';

const mapStateToProps = (state, ownProps) => {
  return {
    todo: state.todos[ownProps.id],

  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    completeItem: () => dispatch(markTodoAsComplete(ownProps.id)),
    undoCompleteItem: () => dispatch(undoTodoComplete(ownProps.id)),
    deleteItem: () => dispatch(deleteTodo(ownProps.id)),
    toggleEditMode: () => dispatch(toggleTodoEditMode(ownProps.id)),
    // updateEditTaskField: () => dispatch(updateEditField(field, value))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoItemView);
