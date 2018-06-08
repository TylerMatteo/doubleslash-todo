import React, { Component } from 'react';

import AddTask from './components/AddTask';
import TodoList from './components/TodoList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">{'// todo'}</h1>
        </header>
        <div className='app-body'>
          <AddTask />
          <TodoList />
        </div>
      </div>
    );
  }
}

export default App;
