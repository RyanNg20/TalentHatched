import { useState } from "react"
import { FormButton, SelectButton } from "../../../components/buttons"
import { Bold48, HeaderWrapper, Row } from "../../../components/style"
import { BodyWrapper, FormPageWrapper } from "./style"
import Header from "../../../components/header"

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
      <Header text="What are your top three soft skills?" onClick={onBackClick}/>
      <form onSubmit={(e) => {onSubmit(e)}} id="form">
        <BodyWrapper>
          <Row>
            {skillArray.map((skill, index) => {
              return(
                <SelectButton title={skill} margin="15px"/>
              )
            })}
          </Row>
        </BodyWrapper>
        <FormButton/>
      </form>
    </FormPageWrapper>
  )
}

export default SoftSkills