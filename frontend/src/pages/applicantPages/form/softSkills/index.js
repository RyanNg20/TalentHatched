import { useState } from "react"
import { FormButton, BackButton, SelectButton } from "../../../../components/buttons"
import { useNavigate } from "react-router-dom"
import Input from "../../../../components/input"
import { Bold48, HeaderWrapper } from "../../../../components/style"
import { FormPageWrapper } from "../style"
import { OptionWrapper, SoftSkillsWrapper } from "./style"

/*
Props:
*/

const SoftSkills = ({page, onBackClick, onNextClick, thisPage}) => {

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
    <FormPageWrapper page={page} thisPage={thisPage}>
      <HeaderWrapper>
        <BackButton onClick={onBackClick}/>
        <Bold48 style={{marginLeft: '50px'}}>
          What are your top three soft skills?
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
    </FormPageWrapper>
  )
}

export default SoftSkills