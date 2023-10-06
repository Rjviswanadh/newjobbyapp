import {Redirect, Link} from 'react-router-dom'
import Cookies from 'js-cookie'

import Header from '../Header'

import './index.css'

const Home = () => {
  const jwtToke = Cookies.get('jwt_token')
  console.log(jwtToke)
  if (jwtToke === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <div className="home-bg-color">
      <Header />
      <div className="div-container">
        <h1>Find The Job That Fits Your Life</h1>
        <p>
          millions of people are searching for jobs,company information and
          reviews.Find the job that fits for you ability and potential
        </p>
        <Link to="/jobs">
          <button type="button" className="find-jobs">
            Find Jobs
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Home
