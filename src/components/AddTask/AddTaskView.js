import React, { Component } from 'react';

import './AddTodo.css';

class AddTaskView extends Component {
  addItem() {
    this.props.createTodo(this.props.newTask);
    this.props.clearAddTaskFields();
    this.titleField.value = '';
    this.descriptionField.value = '';
  }

  updateField(field, value) {
    this.props.updateAddTaskField(field, value);
  }

  render() {
    const buttonText = 'Add Task';
    const buttonClass = 'add-todo-button' +
        (this.props.newTask && this.props.newTask.title && this.props.newTask.title.length ? '' : ' disabled')
    return (
      <div className='ui-card add-todo-container'>
        <h3 className='add-todo-header'>Add a New Task</h3>
        <div className='input-group'>
          <label htmlFor='title' className='input-group-label'>Title</label>
          <input type='text'
            ref={(titleField) => this.titleField = titleField}
            id='title'
            className='input-group-field'
            onChange={(e) => this.updateField('title', e.target.value)}
            placeholder='Add a title...'/>
        </div>
        <div className='input-group'>
          <label htmlFor='description' className='input-group-label'>Description</label>
          <textarea type='text'
            ref={(descriptionField) => this.descriptionField = descriptionField}
            id='description'
            className='input-group-field'
            onChange={(e) => this.updateField('description', e.target.value)}
            placeholder='Describe the task...'/>
        </div>
        <button className={buttonClass} onClick={this.addItem.bind(this)}>
          {buttonText}
        </button>
      </div>
    );
  }
}

export default AddTaskView;
