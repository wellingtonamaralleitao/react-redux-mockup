import React, { Component } from 'react';
import autobind from 'class-autobind'

import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props)
    autobind(this)
  }

  render() {
    return (
      <div className="login">
        <div className="login-header">
          <h2>Login</h2>
        </div>
        <p className="login-intro">
          <button onClick={this.signIn}>
            SignIn
          </button>
          <button onClick={this.signUp}>
            SignUp
          </button>
        </p>
        <div>
          {
            this.props.auth.user &&
              <span>
                <p>Olá</p>
                {this.props.auth.user}
              </span>
          }
        </div>
      </div>
    )
  }

  signIn() {
    this.props.login('wellynton.amaral', '123456')
  }

  signUp() {
    console.log('signup executing...')
  }
}

export default Login;
