import {Component} from 'react'

import {GoLocation} from 'react-icons/go'
import {BsBriefcase} from 'react-icons/bs'
import Loader from 'react-loader-spinner'

import Cookies from 'js-cookie'

import Header from '../Header'

import Skills from '../Skills'

import './index.css'
import SimilarJobs from '../SimilarJobs'

class JobItemDetails extends Component {
  state = {
    jobDetailsPage: '',
    skillsDisplay: [],
    lifeAtWork: [],
    similarJobs: [],
    isLoading: true,
    failureStatus: false,
    successStatus: false,
  }

  componentDidMount() {
    this.getJobDetails()
  }

  getJobDetails = async () => {
    this.setState(pv => ({isLoading: !pv.isLoading}))
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwt = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/jobs/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    }
    const response = await fetch(url, options)
    const Data = await response.json()
    console.log(Data.similar_jobs)
    if (response.ok === true) {
      this.setState(pv => ({
        lifeAtWork: Data.job_details.life_at_company,
        similarJobs: Data.similar_jobs,
        skillsDisplay: Data.job_details.skills,
        jobDetailsPage: Data.job_details,
        successStatus: !pv.successStatus,
      }))
    } else {
      this.setState(pv => ({failureStatus: !pv.failureStatus}))
    }
  }

  renderLoading = () => (
    <div
      className="loader-container" // testid="loader"
    >
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderSuccess = () => {
    const {
      similarJobs,
      jobDetailsPage,
      skillsDisplay,
      lifeAtWork,
      isLoading,
    } = this.state
    console.log(isLoading)
    const {
      company_logo_url: companyLogoUrl,
      employment_type: employmentType,
      job_description: jobDescription,
      location,
      package_per_annum: packagePerAnnum,
      rating,
      title,
      company_website_url: companyWebsiteUrl,
    } = jobDetailsPage
    const {description, image_url: imageUrl} = lifeAtWork
    return (
      <>
        <Header />
        <div className="bg-color-jobs">
          <div className="bg-container">
            <div className="logo-title-rating">
              <img src={companyLogoUrl} alt="job details company logo" />
              <div>
                <h1>{title}</h1>
                <p>{rating}</p>
              </div>
            </div>
            <div className="location-salary">
              <div className="location-type">
                <div className="go-location">
                  <GoLocation className="go" />
                  <p className="city">{location}</p>
                </div>
                <div className="go-location go">
                  <BsBriefcase />
                  <p className="emp go-location">{employmentType}</p>
                </div>
              </div>
              <p>{packagePerAnnum}</p>
            </div>
            <hr />
            <div>
              <h1>Description</h1>
              <a href={companyWebsiteUrl}>Visit</a>
            </div>
            <p>{jobDescription}</p>
            <h1>Skills</h1>
            <div>
              <ul className="skills-set">
                {skillsDisplay.map(eachSkill => (
                  <Skills skills={eachSkill} key={eachSkill.id} />
                ))}
              </ul>
            </div>
            <h1>Life At Company</h1>
            <div className="work-at-company">
              <p className="description">{description}</p>
              <img src={imageUrl} alt="life at company" className="life-img" />
            </div>
          </div>
          <div>
            <h1 className="similar">Similar Jobs</h1>
            <ul className="similar-jobs-container">
              {similarJobs.map(eachSimilar => (
                <SimilarJobs similarJobs={eachSimilar} key={eachSimilar.id} />
              ))}
            </ul>
          </div>
        </div>
      </>
    )
  }

  retryJobItemDetails = () => this.renderSuccess()

  renderFailure = () => (
    <>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
          alt="failure view"
        />
        <h1>Oops! Something Went Wrong</h1>
        <p>We cannot seem to find the page you are looking for</p>
        <button
          onClick={this.retryJobItemDetails}
          className="btn"
          type="button"
        >
          Retry
        </button>
      </div>
    </>
  )

  render() {
    const {isLoading, failureStatus} = this.state

    return (
      <div>
        {failureStatus ? (
          this.renderFailure()
        ) : (
          <>{isLoading ? this.renderLoading() : this.renderSuccess()}</>
        )}
      </div>
    )
  }
}
export default JobItemDetails
