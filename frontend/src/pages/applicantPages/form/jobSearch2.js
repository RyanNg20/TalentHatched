import { useState } from "react"
import { FormButton, BackButton } from "../../../components/buttons"
import { useNavigate } from "react-router-dom"
import Input from "../../../components/input"
import { Bold48, HeaderWrapper } from "../../../components/style"
import { FormPageWrapper } from "./style"

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
      <HeaderWrapper>
        <BackButton onClick={onBackClick}/>
        <Bold48 style={{marginLeft: '50px'}}>
          What do you want to gain from that job?
        </Bold48>
      </HeaderWrapper>
      <form onSubmit={(e) => {onSubmit(e)}} id="form">
        <div style={{marginLeft: '100px'}}>
          <Input type="" title="Mentorship" placeholder="" margin="30px 0px" required width="200px" info="What do you want to learn?"/>
          <Input type="range" inputType="number" title="Pay (USD)" placeholder="20" placeholder2="30" margin="30px 0px" required width="150px" info=""/>
          <Input type="" title="Benefits" placeholder="Health Insurance" margin="30px 0px" required width="500px" info="What perks do you need?"/>
        </div>
        <FormButton/>
      </form>
    </FormPageWrapper>
  )
}

export default JobSearch2