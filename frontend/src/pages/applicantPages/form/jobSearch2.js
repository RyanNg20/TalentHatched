import { useState } from "react"
import { FormButton } from "../../../components/buttons"
import { useNavigate } from "react-router-dom"
import Input from "../../../components/input"
import { FormPageWrapper } from "./style"
import Header from "../../../components/header"
import { BodyWrapper } from "../../../components/style"

/*
Props:
*/

const JobSearch2 = ({page, onNextClick, onBackClick, thisPage}) => {
  const navigate = useNavigate()
  const onSubmit = (e) => {
    e.preventDefault()
    navigate("/finish")
  }

  return (
    <FormPageWrapper page={page} thisPage={thisPage}>
      <Header text="What do you want to gain from this job?" onClick={onBackClick}/>
      <form onSubmit={(e) => {onSubmit(e)}} id="form">
        <BodyWrapper>
          <Input type="" title="Mentorship" placeholder="" style={{margin:"30px 0px"}} required width="200px" info="What do you want to learn?"/>
          <Input type="range" inputType="number" title="Pay (USD)" placeholder="20" placeholder2="30" style={{margin:"30px 0px"}} required width="150px" info=""/>
          <Input type="" title="Benefits" placeholder="Health Insurance" style={{margin:"30px 0px"}} required width="150px" info="What perks do you need?"/>
        </BodyWrapper>
        <FormButton/>
      </form>
    </FormPageWrapper>
  )
}

export default JobSearch2