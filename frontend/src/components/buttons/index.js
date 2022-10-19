import { useState } from "react"
import { Link } from "react-router-dom"
import { Reg18, Row } from "../style"
import { ButtonWrapper, ArrowWrapper, CheckMarkWrapper, Checkbox } from "./style"
import { IoArrowBackOutline, IoCheckmarkOutline } from 'react-icons/io5'
import colors from "../colors"

export const Button = ({title, disable, link, margin, onClick}) => {
  if (!disable) disable = false

  return (
    <Link to={link} style={{textDecoration: 'none', width: 'fit-content', height: 'fit-content'}}>
      <ButtonWrapper type="button" disable={disable} margin={margin} onClick={onClick}>
        <Reg18>
          {title?title:"Next"}
        </Reg18>
      </ButtonWrapper>
    </Link>
  )
}

export const SelectButton = ({title, margin, disable, onClick, index}) => {

  return (
    <ButtonWrapper
      type="button"
      disable={disable[index]}
      onClick={onClick}
      margin={margin}
    >
      <Reg18>
        {title?title:"Next"}
      </Reg18>
      <CheckMarkWrapper disable={disable[index]}>
        <IoCheckmarkOutline size={18}/>
      </CheckMarkWrapper>
    </ButtonWrapper>
  )
}

export const FormButton = ({title, disable, style}) => {
  return(
    <ButtonWrapper type="submit" disable={disable} style={style}>
      <Reg18>
        {title?title:"Next"}
      </Reg18>
    </ButtonWrapper>
  )
}

export const BackButton = ({link, onClick, margin}) => {
  return (
    <Link to={link} style={{textDecoration: 'none', margin, width: 'fit-content', height: 'fit-content'}}>
      <ArrowWrapper onClick={onClick}>
        <IoArrowBackOutline size={24}/>
      </ArrowWrapper>
    </Link>
  )
}