import { useState } from "react"
import { FormButton, BackButton, SelectButton } from "../../../components/buttons"
import { useNavigate } from "react-router-dom"
import Input from "../../../components/input"
import { Bold48, HeaderWrapper } from "../../../components/style"
import { OptionWrapper, SoftSkillsWrapper } from "./style"

/*
Props:
*/

const SoftSkills = ({page, onBackClick, onNextClick}) => {

  const skillArray = [
    "Adaptability",
    "Communication",
    "Conflict Management",
    "Creativity",
    "Customer Service",
    "Emotional Intelligence",
    "Teamwork",
    "Time Management",
    "Problem Solving",
    "Customer Service",
    "Willingness to Learn",
  ]

  const onSubmit = (e) => {
    e.preventDefault()
    onNextClick()
  }

  return (
    <SoftSkillsWrapper page={page}>
      <HeaderWrapper>
        <BackButton onClick={onBackClick}/>
        <Bold48 style={{marginLeft: '50px'}}>
          Soft Skills
        </Bold48>
      </HeaderWrapper>
      <form onSubmit={(e) => {onSubmit(e)}} id="form">
        <OptionWrapper>
          {skillArray.map((skill, index) => {
            return(
              <SelectButton title={skill} margin="15px"/>
            )
          })}
        </OptionWrapper>
        <FormButton/>
      </form>
    </SoftSkillsWrapper>
  )
}

export default SoftSkills