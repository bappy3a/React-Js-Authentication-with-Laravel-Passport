import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Nav extends Component {
  state = {
    loggedout: ''
  }
  logout = () => {
    localStorage.clear();
    this.props.setUser(null);
  }
  render() {
    let buttons;
    let profile;
    if (localStorage.getItem('token')) {
      buttons = (
        <div>
          <Link class="nav-link" to="/" onClick={this.logout} >Logout  </Link>
        </div>
      )
      profile = (
        <div>
          <Link class="nav-link" to="/profile">Profile</Link>
        </div>
      )
    } else {
      buttons = (
        <div>
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <Link class="nav-link" to="/login">Login </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link" to="/register">Register</Link>
            </li>
          </ul>
        </div>
      )

    }
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <Link class="navbar-brand" to="/">Ahmed Bappy</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  {profile}
                </li>
              </ul>
              <span class="navbar-text">
                {buttons}
              </span>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Nav