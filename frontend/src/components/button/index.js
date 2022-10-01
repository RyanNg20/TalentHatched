import { Link } from "react-router-dom"
import { Reg18 } from "../style"
import { ButtonWrapper } from "./style"

const Button = ({title, link}) => {
  return (
    // <Link to={link} style={{textDecoration: 'none'}}>
      <ButtonWrapper type="submit">
        <Reg18>
          {title?title:"Next"}
        </Reg18>
      </ButtonWrapper>
    // </Link>
  )
}

export default Button