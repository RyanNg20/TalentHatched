import { Link } from "react-router-dom"
import { Reg18 } from "../style"
import { ButtonWrapper, ArrowWrapper } from "./style"
import { IoArrowBackOutline } from 'react-icons/io5'

export const Button = ({title, disable, type, link}) => {
  if (!disable) disable = false

  const button = (
    <ButtonWrapper type="submit" disable={disable}>
      <Reg18>
        {title?title:"Next"}
      </Reg18>
    </ButtonWrapper>
  )
  if (type == 'form') return button
  else
    return (
      <Link to={link} style={{textDecoration: 'none'}}>
        {button}
      </Link>
    )
}

export const BackButton = ({link, onClick}) => {
  return (
    <Link to={link} style={{textDecoration: 'none'}}>
      <ArrowWrapper onClick={onClick}>
        <IoArrowBackOutline size={24}/>
      </ArrowWrapper>
    </Link>
  )
}