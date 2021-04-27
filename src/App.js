import React from "react";
import "./App.css";
import TodoList from './Todo/TodoList'
export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  render() {
    return (
      <div>
        <h1>TODOS</h1>
        <TodoList />
      </div>
    );
  }
}
