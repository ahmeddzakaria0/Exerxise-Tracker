 import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



//Eaxh Row component
 const Exercise = (props) => {return(
  <tr>
    <td>{props.exercise.username}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.duration}</td>
    <td>{props.exercise.createdAt}</td>
    <td>
    <Link to={"/updateExercise/"+props.exercise._id}>Edit</Link> || <a href="#" onClick={() => { props.deleteExercise(props.exercise._id) }}>Delete</a>
    </td>
  </tr>
)} 




class ListExercises extends Component {
  constructor(props) {

  //States
    super(props);
    this.onDeleteExercise = this.onDeleteExercise.bind(this)
    this.state = {exercises:[]  }

  }

//LifeCycle Method to Render when about to reload this component 
componentDidMount() {
  axios.get('http://localhost:5000/getAllExercise/')
    .then(response => {
      this.setState({ exercises: response.data })
      console.log(response.data)
    })
    .catch((error) => {
      console.log(error);
    })
}

//Deleting Method
  onDeleteExercise(id){
    axios.delete(`http://localhost:5000/deleteExerciseId/${id}`)
    .then(response => response.data)

    this.setState({
      exercises: this.state.exercises.filter(el => el._id !== el.id)
    })
  }

//returning Each Exercise in a row 
  exerciseList(){
    return this.state.exercises.map(eachExercise => {
      return <Exercise exercise={eachExercise} deleteExercise={this.onDeleteExercise} key={eachExercise._id}/>;
    })
  }


  render() { 
    return ( 
      <div>
      <h3>Logged Exercises</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Username</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          { this.exerciseList() } 
        </tbody>
      </table>
    </div>
     );
  }
}
 
export default ListExercises ;

