import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import axios from 'axios';

class Login extends Component {

    state={
        email:'',
        password:'',
        message:'',
    }

    //Login Form Submit
    formSummit= (e) =>{
        e.preventDefault();

        axios.post('/login',this.state)
        .then((response) => {
            localStorage.setItem('token',response.data.token);
            this.setState({
                loggedIn:true
            })
            this.props.setUser(response.data.user);
        })
        .catch((error) => {
            this.setState({ message: error.response.data.message })
        });
    }

    render() {

        if(this.state.loggedIn){
            return  <Redirect to={ '/profile'} />
        }

        if (localStorage.getItem('token')) {
            return <Redirect to={'profile'} />
       }
        /// Show Error Message 
        let error = "";
        if (this.state.message) {
             error = (
                  <div>
                       <div class="alert alert-danger" role="alert" >
                            {this.state.message}
                       </div>
                  </div>
             )
        } // end error message

        return (
            <div>
                <div class="row ">
                    <div class="jumbotron col-md-4 offset-md-4 mt-5 ">
                        <h3 class="text-center">Login Accoutn</h3>
                        <form onSubmit={this.formSummit}>
                            {error}
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" name='email' required onChange={(e)=>{this.setState({email:e.target.value})} }/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" name='password' required onChange={(e)=>{this.setState({password:e.target.value})} }/>
                            </div>
                            <div class='d-grid gap-2 mb-3'>
                                <button type="submit" class="btn btn-primary">Login</button>
                            </div>
                            Forget My Password <Link to="/forget"> Clink Here</Link>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login