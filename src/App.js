import React from 'react';
import {BrowserRouter , Routes ,Route} from "react-router-dom"
//import {Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar  from "./components/navbarco"
import AddExercise   from "./components/addExerCo"
import AddUser from "./components/addUserCo"
import EditExercise from './components/updateExerCo'

import ListExercsies from './components/getExerCo'
function App(){
  return(
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<h1>Exercise</h1>}></Route> 
        <Route path='/addExercise' element={< AddExercise />}></Route> 
        <Route path='/useradd' element={<AddUser/>}></Route>
        <Route path='/getAllExercise' element={<ListExercsies/>}></Route>
        <Route path='/updateExercise/:id/' element={<EditExercise/>}></Route>
      </Routes>
    </BrowserRouter>      
  )}
export default App;


   

 