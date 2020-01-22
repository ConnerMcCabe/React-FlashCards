import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    todos: []
  }

  handleCreate = todo => {
    this.setState({
      todos : [todo, ...this.state.todos],
      inputValue : ''
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.handleCreate(this.state.inputValue)
    this.setState({
      inputValue : ''
    })
  }

  


  render() {
    return (
      <div>
        <h1>Comming Soon</h1>
      </div>
    );
  }
}
export default App;