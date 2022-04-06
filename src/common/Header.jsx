import React, { Component } from 'react'
import Nav from './Nav';
import Home from '../components/Home';
import Login from '../components/Login';
import Register from '../components/Register';
import Forget from '../components/Forget';
import Profile from '../components/Profile';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from 'axios';

class Header extends Component {

  state = {
    user: {}
  }

  componentDidMount() {
    axios.get('/user', this.state)
      .then((response) => {
        this.setUser(response.data)

      })
      .catch((e) => {
        console.log(e);
      });
  }

  setUser = (user) => {
    this.setState({ user: user })
  }

  render() {
    return (

      <Router>
        <div>
          <Nav user={this.state.user} setUser={this.setUser} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={() => <Login user={this.state.user} setUser={this.setUser} />} />
            <Route exact path="/register" component={() => <Register user={this.state.user} setUser={this.setUser} />} />
            <Route exact path="/forget" component={Forget} />
            <Route exact path="/profile" component={() => <Profile user={this.state.user} />} />
          </Switch>
        </div>
      </Router>

    )
  }
}

export default Header