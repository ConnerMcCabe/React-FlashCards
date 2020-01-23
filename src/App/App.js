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

  handleOnChange = event => {
    this.setState({
      inputValue : event.target.value
    })
  }

  handleDelete = id => {
    let currState = this.state.todos
    let newState = currState.filter(item => currState[id] !== item )
    this.setState({
      todos : newState
    })
  };

  render() {
    const renderTodos = this.state.todos.map((item, index) => {
      return (
        <form>
          <li>
            {item}
            <button>
              Delete
            </button>
          </li>
        </form>
      )
    })
    return (
      <div className="App">
        <ul className="todos"> {renderTodos} </ul>
        <form className="add-form" onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleOnChange} value={this.state.inputValue}/>
          <input type="submit" value="Add"/>
        </form>
      </div>
    );
  }
}
export default App;