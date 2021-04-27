import React, { Component } from "react";
import '../index.css';
const styles = {
  span: {
    marginRight: "100px",
  },
};

export default class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props.todo);
    const { checked, todo } = this.props;

    const classes = []

    if(todo.complete){
        // console.log('complete')
        classes.push('done')
    }
    return (
      <li>
        <input
          type="checkbox"
          name=""
          id=""
          onChange={() => {
            checked(todo.id);
          }}
        />
        <span className={classes} style={styles.span}>{todo.title}</span>
        <button>Delete</button>
      </li>
    );
  }
}
