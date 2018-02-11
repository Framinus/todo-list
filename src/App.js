import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Task from './Components/Tasks/Task'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
    };
  }

  componentWillMount() {
    this.showAllTasks()
  }

  showAllTasks() {
    axios.get('https://tasks-api.com/tasks')
      .then((tasklist) => {
        const tasks = tasklist.data;
        this.setState({
          tasks: tasks
        })
      })
  }


  render() {
    let taskList = (
      <ul>
        {this.state.tasks.map((task, index) =>
          <Task
            click={() => this.deleteTask(task.id, index)}
            key={task.id}
            id={task.id}
            text={task.content}
          />
        )}
      </ul>
    )

    return (
      <div className="App">
        <h1>To Do List</h1>
        {taskList}
      </div>
    );
  }
}

export default App;
