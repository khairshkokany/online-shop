import React, { Component } from 'react'
import axios from 'axios';
export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            products: [],
        
        }
        this.changeEmail = this.changeEmail.bind(this)
        this.changeProducts = this.changeProducts.bind(this)
        // this.changePassword = this.changePassword.bind(this)
    }

    changeProducts(event) {
        this.setState({
            products: event.target.value

        })
        console.log(this.state.products);
    }
    changeEmail(event) {
        this.setState({
            email: event.target.value

        })
        console.log(this.state.email);
    }


    handleSubmit = (event) => {

        event.preventDefault();
        const addProducts = {
          email : this.state.email,
          products : this.state.products,
         
        //   type:this.state.type
        }
        console.log(this);

        axios.post('http://localhost:3004/app/product' , addProducts)
        .then(data => console.log(data.data))
        .catch(e=> {alert('Hello From Error')})
        this.setState({
            email:'',
             products :[]

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


                            <input type='text'
                                placeholder='products'
                                onChange={this.changeProducts}
                                value={this.state.products}
                                className="form-control form-group" />

                        

                            <input type='submit' className="btn btn-danger btn-block" value='Submit' />
                        </form>
                        

                    </div>

                </div>
            </>
        );
    }
}
