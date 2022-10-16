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
      <ButtonWrapper type="button" disable={disable} margin={margin} onClick={() => {onClick()}}>
        <Reg18>
          {title?title:"Next"}
        </Reg18>
      </ButtonWrapper>
    </Link>
  )
}

export const SelectButton = ({title, margin}) => {
  const [disable, setDisable] = useState(true)

  return (
    <ButtonWrapper type="button" disable={disable} onClick={() => {setDisable(!disable)}} margin={margin}>
      <Reg18>
        {title?title:"Next"}
      </Reg18>
      <CheckMarkWrapper disable={disable}>
        <IoCheckmarkOutline size={18}/>
      </CheckMarkWrapper>
    </ButtonWrapper>
  )
}

export const FormButton = ({title, disable, margin}) => {
  return(
    <ButtonWrapper type="submit" disable={disable} margin={margin}>
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
export const BoxButton = ({title, boxes, setBoxes, index, style}) => {
  return (
    <Row style={{alignItems: 'center', ...style}}>
      <Checkbox
        type="button"
        onClick={() => {
          setBoxes((current) => {
            let temp = new Array(current.length).fill(false)
            temp.forEach((val, index) => {
              temp[index] = current[index]
            })
            temp[index] = !temp[index]
            return temp
          })
        }}
        boxes={boxes}
        index={index}
      >
        <IoCheckmarkOutline color={colors.white} style={{opacity: boxes[index]?1:0}}/>
      </Checkbox>
      <Reg18 style={{marginLeft: 20}}>
        {title}
      </Reg18>
    </Row>
  )
}