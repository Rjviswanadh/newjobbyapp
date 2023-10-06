import {Link} from 'react-router-dom'

import {GoLocation} from 'react-icons/go'
import {BsBriefcase} from 'react-icons/bs'

import './index.css'

const JobItems = props => {
  const {eachJobs} = props
  const {
    companyLogoUrl,
    employmentType,
    jobDescription,
    location,
    packagePerAnnum,
    rating,
    title,
    id,
  } = eachJobs
  return (
    <div className="bg-container">
      <Link to={`/jobs/${id}`} className="link">
        <div className="company-url">
          <img src={companyLogoUrl} alt="company logo" className="img" />
          <div className="company-h-p">
            <h1>{title}</h1>
            <div>
              <h1>{rating}</h1>
            </div>
          </div>
        </div>
        <div className="display">
          <div className="display-location">
            <li className="list">
              <p>{location}</p>
              <GoLocation className="go-icon" />
            </li>
            <div className="employment-type">
              <BsBriefcase className="bsbr" />
              <p className="intern">{employmentType}</p>
            </div>
          </div>

          <p>{packagePerAnnum}</p>
        </div>
        <hr className="link" />
        <p>{jobDescription}</p>
      </Link>
    </div>
  )
}
export default JobItems
