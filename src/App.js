import React, { Component } from 'react';

class App extends Component {
  state = {
     tasks: [
       {id: 1, title: "Learn React"},
       {id: 2, title: "Learn Redux"},
       {id: 3, title: "Learn React Router"},
     ]
  }
  render() {
    return (
      <div className="App">
        <h1 className="center blue-text">Tasks</h1>
        <Tasks tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
