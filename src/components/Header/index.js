// import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'

import './index.css'

import Cookies from 'js-cookie'

const Header = props => {
  const clickLogout = () => {
    console.log('help')
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <div className="nav-bg-color">
      <nav className="header">
        <Link to="/" className="link">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="website-logo-image"
          />
        </Link>
        <ul className="home-jobs-button">
          <Link to="/" className="home">
            Home
          </Link>
          <Link to="/jobs" className="home">
            Jobs
          </Link>
          <li className="">
            <button
              type="button"
              onClick={clickLogout}
              className="btn btn-primary button"
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default withRouter(Header)
