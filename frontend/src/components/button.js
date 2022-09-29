import { Link } from "react-router-dom"

const Button = (props) => {
  return (
    <Link to={props.link}>
      Next
    </Link>
  )
}

export default Button