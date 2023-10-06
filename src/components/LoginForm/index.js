import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {
    userName: '',
    LoginPassword: '',
    errorMsg: '',
  }

  wrongUser = errorMsg => {
    console.log(errorMsg)
    this.setState({errorMsg})
  }

  submitForm = jwtToken => {
    console.log(jwtToken)
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  submitLogin = async event => {
    event.preventDefault()
    const {userName, LoginPassword} = this.state
    const userDetails = {username: userName, password: LoginPassword}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    // console.log(data.jwt_token)
    if (response.ok === true) {
      this.submitForm(data.jwt_token)
    } else {
      this.wrongUser(data.error_msg)
    }
  }

  getUserName = event => {
    this.setState({userName: event.target.value})
  }

  getPassword = event => {
    this.setState({LoginPassword: event.target.value})
  }

  userName = () => (
    <>
      <div className="username">
        <label htmlFor="username">USERNAME</label>
        <input
          id="username"
          type="text"
          placeholder="USERNAME"
          onChange={this.getUserName}
        />
      </div>
    </>
  )

  password = () => (
    <>
      <div className="username">
        <label htmlFor="password">PASSWORD</label>
        <input
          id="password"
          type="password"
          placeholder="PASSWORD"
          onChange={this.getPassword}
        />
      </div>
    </>
  )

  render() {
    const {errorMsg} = this.state
    const jwtToke = Cookies.get('jwt_token')
    // console.log(jwtToke)
    if (jwtToke !== undefined) {
      return <Redirect to="/login" />
    }
    return (
      <>
        <div className="login-bg-color">
          <form className="login-container" onSubmit={this.submitLogin}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
            />
            {this.userName()}
            {this.password()}
            <div>
              <button
                className="btn btn-primary"
                type="submit" // className="loginButton"
              >
                Login
              </button>
            </div>
            <p>{errorMsg}</p>
          </form>
        </div>
      </>
    )
  }
}
export default LoginForm
