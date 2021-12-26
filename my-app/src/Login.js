import React, { Component } from 'react'
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"



export default class login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
        this.changeEmail = this.changeEmail.bind(this)
        this.changePassword = this.changePassword.bind(this)
    }

    changeEmail(event) {
        this.setState({
            email: event.target.value

        })
        console.log(this.state.email);
    }

    changePassword(event) {
        this.setState({
            password: event.target.value
        })
    }

    handleSubmit = (event) => {

        event.preventDefault();
        const regester = {
        //   username : this.state.username,
          email : this.state.email,
          password : this.state.password,
        //   type:this.state.type
        }
        console.log(this);
        console.log(this.state.email, this.state.password);

        axios.post('http://localhost:3002/app/login' , regester)
        .then(data => console.log(data.data))
        .catch(e=> {console.log(e)})
        this.setState({

          email: "",
          password : "",

        })
    
    }
    render() {
        return (
            <>
                <div className="container">
                    <div className="form-div">
                        <form onSubmit={this.handleSubmit}>

                            <input type='text'
                                placeholder='email'
                                onChange={this.changeEmail}
                                value={this.state.email}
                                className="form-control form-group" />

                            <input type='password'
                                placeholder='password'
                                onChange={this.changePassword}
                                value={this.state.password}
                                className="form-control form-group" />



                            <input type='submit' className="btn btn-danger btn-block" value='Submit' />
                        </form>


                    </div>

                </div>
            </>
        );
    }
}
