import { useState } from "react"
import { FormButton, BackButton } from "../../../components/buttons"
import { useNavigate } from "react-router-dom"
import Input from "../../../components/input"
import { Bold48, HeaderWrapper } from "../../../components/style"
import { FormPageWrapper } from "./style"

/*
Props:
*/

const JobSearch1 = ({page, onNextClick, onBackClick, thisPage}) => {
  const onSubmit = (e) => {
    e.preventDefault()
    onNextClick()
  }

  return (
    <FormPageWrapper page={page} thisPage={thisPage}>
      <HeaderWrapper>
        <BackButton onClick={onBackClick}/>
        <Bold48 style={{marginLeft: '50px'}}>
          What kind of job do you want?
        </Bold48>
      </HeaderWrapper>
      <form onSubmit={(e) => {onSubmit(e)}} id="form">
        <div style={{marginLeft: '100px'}}>
          <Input type="range" inputType="number" title="Workload" placeholder="24" placeholder2="40" margin="30px 0px" required width="150px" info="How many hours do you want to work?"/>
          <Input type="dropdown" title="WorkplaceType" placeholder="talenthatched@gmail.com" margin="30px 0px" required width="500px" info="Where will you be working?"/>
          <Input type="autofill" title="Skills" placeholder="React" margin="30px 0px" required width="200px" info="What skills do you want to use on the job?"/>
        </div>
        <FormButton/>
      </form>
    </FormPageWrapper>
  )
}

export default JobSearch1