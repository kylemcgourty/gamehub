import React, {Component} from 'react';
import FbLogin from './fb_login';
import Login from './login';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>GameHub</h1>
        <h2>slogan...</h2>
        <FbLogin />
        <Login />
      </div>
    );
  }
}