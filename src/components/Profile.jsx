import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

class Profile extends Component {
  render() {

    let name;
    let email;
    if (this.props.user) {
      name = this.props.user.name;
      email = this.props.user.email;
    }
    if (!localStorage.getItem('token')) {
      return <Redirect to={'login'} />
    }

    return (
      <div>
        <div class="row ">
          <div class="jumbotron col-md-4 offset-md-4 mt-5 ">
            <h3 class="text-center">Profile Accoutn</h3>
            <ul class="list-group">
              <li class="list-group-item">Name: {name}</li>
              <li class="list-group-item">Email: {email}</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile