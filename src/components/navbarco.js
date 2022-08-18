import React, { Component } from 'react';
import {Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Navbar extends Component {
  render(){
    return( 
         <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
         <Link to="/"className="navbar-brand">Exercises</Link>
         <div className="collpase navbar-collapse">
         <ul className="navbar-nav mr-auto">
           <li className="navbar-item">
           <Link to="/addExercise"className="nav-link">Add Exercises</Link>
           </li>
           <li className="navbar-item">
           <Link to="/getAllExercise"className="nav-link">List All Exercises</Link>
           </li>
           <li className="navbar-item">
           <Link to="/useradd"className="nav-link">Add User</Link>
           </li>
          {/*  <li className="navbar-item">
           <Link to="/updateExercise"className="nav-link">Update Exercise</Link>
           </li>
           <li className="navbar-item">
           <Link to="/deleteExercise"className="nav-link">Delete Exercise</Link>
           </li> */}
           </ul>
         </div>
       </nav>

    ) //end return
  } //end render
} //end class


      
          
         


