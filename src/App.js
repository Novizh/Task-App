import React, { Component } from 'react';
import Tasks from './Tasks'
import AddTask from './AddTask'

class App extends Component {
  state = {
     tasks: [
       {id: 1, title: "Learn React"},
       {id: 2, title: "Learn Redux"},
       {id: 3, title: "Learn React Router"},
     ]
  }
  deleteTask = (id) => {
    const tasks = this.state.tasks.filter(task => {
      return task.id !== id
    });
    this.setState({
      tasks
    })
  }
  addTask = (task) => {
    task.id = Math.random();
    let tasks = [...this.state.tasks, task];
    this.setState({
      tasks
    })
  }
  render() {
    return (
      <div className="Task-App container">
        <h1 className="center blue-text">Tasks</h1>
        <Tasks tasks={this.state.tasks} deleteTask={this.deleteTask}/>
        <AddTask addTask={this.addTask}/>
      </div>
    );
  }
}

export default App;
