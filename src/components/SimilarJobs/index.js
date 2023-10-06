import './index.css'

import {GoLocation} from 'react-icons/go'

const SimilarJobs = props => {
  const {similarJobs} = props
  const {
    company_logo_url: companyLogoUrl,
    employment_type: employmentType,
    job_description: jobDescription,
    location,
    rating,
    title,
  } = similarJobs
  console.log(similarJobs.title, companyLogoUrl)
  return (
    <>
      <li className="container">
        <div className="similar-div">
          <img
            src={companyLogoUrl}
            alt="similar job company logo"
            className="src-img"
          />
          <div>
            <h1 className="h1element">{title}</h1>
            <p>{rating}</p>
          </div>
        </div>
        <h1>Description</h1>
        <p>{jobDescription}</p>
        <div className="similar-div">
          <GoLocation className="similar-job-location" />
          <p className="similar-location">{location}</p>
          <p>{employmentType}</p>
        </div>
      </li>
    </>
  )
}

export default SimilarJobs
