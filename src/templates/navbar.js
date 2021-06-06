import React from "react";
import { Link } from "react-router-dom";
import logo from './pic2.jpg';

const styles = {
    fontStyle: {
        color: 'white'
    },
  };
export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
                    <img src={logo}
                    width="35"
                    height="45"
                    />
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">          
            <li class="nav-item">           
              <Link to="/"style={styles.fontStyle} class="nav-link" >Home</Link>
            </li>
            <li class="nav-item">
                <Link to="/todos" style={styles.fontStyle} class="nav-link" >Todos</Link>
            </li>
            <li class="nav-item">
                <Link to="/users" style={styles.fontStyle} class="nav-link" >Users</Link>
            </li>
            <li class="nav-item">
                <Link to="/acc" style={styles.fontStyle} class="nav-link" >Login or Registation</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
