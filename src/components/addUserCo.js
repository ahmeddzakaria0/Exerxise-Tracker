import React, { Component } from 'react';
import axios from 'axios';



class AddUser extends Component {

    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state={
            username:''
        }
    }//end constructor

    
    onChangeUsername(e){this.setState({username: e.target.value})}

    onSubmit(e){
        e.preventDefault()
        const username = {username: this.state.username}
        console.log(username)

        axios.post('http://localhost:5000/useradd/', username)
        .then(res => console.log(res.data+'User Added++'));
      

      this.setState({
        username: ''
      })
      
    }

    render(){
        return(
            <div>
            <h3>Create New User</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group"> 
                <label>Username: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                    />
              </div>
              <div className="form-group">
                <input type="submit" value="Create User" className="btn btn-primary" />
              </div>
            </form>
          </div>
        )
    }
}//end class
 
export default AddUser;