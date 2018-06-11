import React, { Component } from 'react';

class TodoItemView extends Component {
  renderCompleteOrUndoButton() {
    if (!this.props.todo.completed) {
      return (<button
          className='mark-as-complete'
          onClick={this.props.completeItem}
          >
        Complete Task
      </button>)
    } else {
      return (<button
        className='undo-completed'
        onClick={this.props.undoCompleteItem}
        >
      Undo
    </button>)
    }
  }

  renderEditOrSaveButton() {
    if (this.props.todo.edit) {
      return (
        <button
        className='save'
        onClick={this.props.toggleEditMode}
        >
          Save
        </button>
      )
    } else {
      return (
        <button
        className='edit'
        onClick={this.props.toggleEditMode}
        >
          Edit
        </button>
      )
    }
  }

  updateField(field, value) {
    this.props.updateAddTaskField(field, value);
  }

  deleteTodoItem() {
    this.props.deleteItem()
  }

  render() {
    const spanClass = 'todo-item-title-prefix'
        + (this.props.todo.completed ? ' done' : ' todo');
    const spanText = this.props.todo.completed ? 'done' : '// todo:'
    const imgSrc = `https://robohash.org/${this.props.todo.title + this.props.todo.description}.png?size=36x36`;
    return (
      <div className='todo-item ui-card'>
        <div className='todo-item-title'>
          <img src={imgSrc} />
          <span className={spanClass}>{spanText}</span>
          <span className='todo-item-title-body'>{this.props.todo.title}</span>
          <div className='todo-item-delete' onClick={this.deleteTodoItem.bind(this)}>
            <i className='material-icons'>clear</i>
          </div>
        </div>
        <p className='todo-item-description'>{this.props.todo.description}</p>
        {this.renderCompleteOrUndoButton()}
        {this.renderEditOrSaveButton()}
      </div>
    )
  }
}

export default TodoItemView;
