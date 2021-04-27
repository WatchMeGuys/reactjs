import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { id: 1, title: "Сделать уроки", complete: false },
        { id: 2, title: "Сделать дом. дела", complete: false },
        { id: 3, title: "Купить хлеб", complete: false },
        { id: 4, title: "Купить молоко", complete: false },
      ],
      inputValue: null
    };
    this.onCheckedTodo = this.onCheckedTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }
  onCheckedTodo(id) {
    console.log("checked", id);
    let todos = this.state.todos.map((value) => {
      if (value.id === id) {
        value.complete = !value.complete;
      }
      return value;
    });
    this.setState({ todos });
    console.log("checked", id);
  }
  addTodo(event) {
    event.preventDefault();
    console.log("qwe");
    let todos = this.state.todos.concat([
      {
        title: this.state.inputValue,
        id: Math.floor(Math.random() * 1000),
        complete: false,
      },
    ]);
    this.setState({todos})
  }
  render() {
    const { todos } = this.state;

    return (
      <ul>
        <form onSubmit={this.addTodo}>
          <input placeholder="type here" onChange={(event)=>{this.setState({inputValue: event.target.value})}}/>
          <button type="submit">Add </button>
        </form>
        {todos.map((val) => {
          return (
            <TodoItem todo={val} key={val.id} checked={this.onCheckedTodo} />
          );
        })}
      </ul>
    );
  }
}
