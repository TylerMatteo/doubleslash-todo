import React, { Component } from 'react';

class TodoItemView extends Component {
  renderButton() {
    if (!this.props.todo.completed) {
      return (<button
          className='mark-as-complete'
          onClick={this.props.completeItem}
          >
        Complete Task
      </button>)
    } else {
      return ''
    }
  }

  deleteTodoItem() {
    this.props.deleteItem()
  }

  render() {
    const spanClass = 'todo-item-title-prefix'
        + (this.props.todo.completed ? ' done' : ' todo');
    const spanText = this.props.todo.completed ? 'done' : '// todo:'
    return (
      <div className='todo-item ui-card'>
        <div className='todo-item-title'>
          <span className={spanClass}>{spanText}</span>
          <span className='todo-item-title-body'>{this.props.todo.title}</span>
          <div className='todo-item-delete' onClick={this.deleteTodoItem.bind(this)}>
            <i className='material-icons'>clear</i>
          </div>
        </div>
        <p className='todo-item-description'>{this.props.todo.description}</p>
        {this.renderButton()}
      </div>
    )
  }
}

export default TodoItemView;
