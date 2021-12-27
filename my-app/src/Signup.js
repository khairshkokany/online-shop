import React, { Component } from 'react'
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"

export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
          username : "",
          email: "",
          password : "",
          type : ""
        }
        this.changeUsername = this.changeUsername.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.changeType = this.changeType.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
      }
    
        changeUsername(event){
          this.setState({
            username:event.target.value
          })
        }
        changeEmail(event){
          this.setState({
            email:event.target.value
          })
        }
        changePassword(event){
          this.setState({
            password:event.target.value
          })
        }
        changeType(event){
          this.setState({
            type:event.target.value
          })
        }
    
      
    
      onSubmit(event) {
        
        event.preventDefault();
        const regester = {
          username : this.state.username,
          email : this.state.email,
          password : this.state.password,
          type:this.state.type
        }
    
    
        axios.post('http://localhost:3004/app/signup' , regester)
        .then(data => console.log(data.data))
        .catch(e=> {alert('User Already Exists')})
        this.setState({
          username : "",
          email: "",
          password : "",
          type : ""
        })
      }
    
    
      render() {
    
        return (
    <>
            <div className="container">
              <div className="form-div">
              
                <form onSubmit={this.onSubmit} action='/type'>
                  <input type='text'
                  placeholder = 'username'
                  onChange={this.changeUsername}
                  value={this.state.username}
                  className="form-control form-group"/>
    
                  <input type='text'
                  placeholder = 'email'
                  onChange={this.changeEmail}
                  value={this.state.email}
                  className="form-control form-group"/>
                  
                  <input type='password'
                  placeholder = 'password'
                  onChange={this.changePassword}
                  value={this.state.password}
                  className="form-control form-group"/>
                  
                  <input type='text'
                  placeholder = 'type'
                  onChange={this.changeType}
                  value={this.state.type}
                  className="form-control form-group"/>
                  
                 
                
                  
                  <input   type='submit' className="btn btn-danger btn-block" value='Submit' />

                </form>
    
    
              </div>
    
            </div>
    </>
        );
    
    
      }
}
