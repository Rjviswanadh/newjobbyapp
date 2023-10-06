import './index.css'

const FiltersGroup = props => {
  const renderEmployeeType = () => {
    const {employmentTypesList} = props
    return employmentTypesList.map(eachType => {
      const {changeEmployment} = props
      const getType = () => changeEmployment(eachType.employmentTypeId)
      return (
        <div key={eachType.label} className="checkBox-type">
          <label htmlFor="checkbox" className="label">
            {eachType.label}
          </label>
          <input type="checkbox" name="checkbox" onClick={getType} />
        </div>
      )
    })
  }

  const renderSalaryRange = () => {
    const {salaryRangesList} = props
    return salaryRangesList.map(eachSalary => {
      const {changeSalary} = props
      const getSalary = () => changeSalary(eachSalary.salaryRangeId)
      return (
        <div key={eachSalary.salaryRangeId} className="checkBox-type">
          <label htmlFor="salary">{eachSalary.label}</label>
          <input type="radio" name="salary" onClick={getSalary} />
        </div>
      )
    })
  }

  return (
    <>
      <ul>
        <label htmlFor="label">
          <h1>Type of Employment</h1>
        </label>
        <div id="label">{renderEmployeeType()}</div>
        <hr className="hr-line" />
        <label htmlFor="label">
          <h1>Salary Range</h1>
        </label>
        <div id="label">{renderSalaryRange()}</div>
        <hr className="hr-line" />
      </ul>
    </>
  )
}
export default FiltersGroup
