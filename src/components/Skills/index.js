import './index.css'

const Skills = props => {
  const {skills} = props
  const {name, image_url: imageUrl} = skills

  return (
    <>
      <li className="skills">
        <img src={imageUrl} alt={name} className="img" />
        <p className="name">{name}</p>
      </li>
    </>
  )
}
export default Skills
