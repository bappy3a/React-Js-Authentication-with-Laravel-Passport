import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import React, { Component } from 'react';

export class Register extends Component {

  state = {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  }

  //Login Form Submit
  formSummit = (e) => {
    e.preventDefault();

    axios.post('/register', this.state)
      .then((response) => {
        localStorage.setItem('token', response.data.token);
        this.setState({
          loggedIn: true
        })
        this.props.setUser(response.data.user);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {

    if (this.state.loggedIn) {
      return <Redirect to={'/profile'} />
    }

    if (localStorage.getItem('token')) {
      return <Redirect to={'profile'} />
    }
    return (
      <div>
        <div class="row ">
          <div class="jumbotron col-md-4 offset-md-4 mt-5 ">
            <h3 class="text-center">Register Accoutn</h3>
            <form onSubmit={this.formSummit}>
              <div class="mb-3">
                <label class="form-label">Name</label>
                <input type="text" class="form-control" onChange={(e) => this.setState({ name: e.target.value })} />
              </div>
              <div class="mb-3">
                <label class="form-label">Email address</label>
                <input type="email" class="form-control" onChange={(e) => this.setState({ email: e.target.value })} />
              </div>
              <div class="mb-3">
                <label class="form-label">Password</label>
                <input type="password" class="form-control" onChange={(e) => this.setState({ password: e.target.value })} />
              </div>
              <div class="mb-3">
                <label class="form-label">Password Confirm</label>
                <input type="password" class="form-control" onChange={(e) => this.setState({ password_confirmation: e.target.value })} />
              </div>
              <div class='d-grid gap-2 mb-3'>
                <button type="submit" class="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Register