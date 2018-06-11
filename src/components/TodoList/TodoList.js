import { connect } from 'react-redux';

import TodoListView from './TodoListView';
import {
  selectTodos,
} from '../../selectors/todos.js';

const mapStateToProps = (state) => {
  console.log(state);
  return {
    todos: Object.entries(state.todos)
      .map(([id, todo]) => { return { id, ...todo }})
      .sort((t1, t2) => new Date(t1.created) - new Date(t2.created)),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoListView);
