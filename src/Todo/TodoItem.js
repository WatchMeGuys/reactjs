import React, { Component } from "react";
import '../index.css';
const styles = {
  span: {
    marginRight: "100px",
    color:'black',
  },
};

export default class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { checked, todo,deleteTodo } = this.props;

    const classes = []

    if(todo.complete){
        // console.log('complete')
        classes.push('done')
    }
    return (
      <li className="list-group-item list-group-item-action list-group-item-danger">
        <input
          type="checkbox"
          name=""
          id=""
          onChange={() => {
            checked(todo.id);
          }}
        />
        <span className={classes} style={styles.span}>{todo.title}</span>
        <button onClick={()=>{deleteTodo(todo.id)}} className="btn btn-outline-danger">Delete</button>
      </li>
    );
  }
}
