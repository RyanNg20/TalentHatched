import { Link } from "react-router-dom"
import { ButtonWrapper } from "./style"

const Button = (props) => {
  return (
    <Link to={props.link} style={{textDecoration: 'none'}}>
      <ButtonWrapper>
        {props.title?props.title:"Next"}
      </ButtonWrapper>
    </Link>
  )
}

export default Button