import React from "react";
import "./App.css";
import Navbar from "./templates/navbar";
import TodoList from './Todo/TodoList'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  render() {
    return (
      <Router>
      <div className="container row">
        <Navbar />
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/todos" component={TodoList} />
        <Route path="/users" component={UserPage} />
      </Switch>
      </Router>
    );
  }
}

const Home =()=>{
  return(
    <div>Home page</div>
  )
}

const UserPage =()=>{
  return(
    <div>Users page</div>
  )
}