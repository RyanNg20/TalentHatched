import { useState } from "react"
import { FormButton, BackButton } from "../../../components/buttons"
import { useNavigate } from "react-router-dom"
import Input from "../../../components/input"
import { Bold48, HeaderWrapper } from "../../../components/style"
import { JobSearch1Wrapper } from "./style"

/*
Props:
*/

const JobSearch1 = ({page, onNextClick, onBackClick}) => {
  const onSubmit = (e) => {
    e.preventDefault()
    onNextClick()
  }

  return (
    <JobSearch1Wrapper page={page}>
      <HeaderWrapper>
        <BackButton onClick={onBackClick}/>
        <Bold48 style={{marginLeft: '50px'}}>
          Job Search 1
        </Bold48>
      </HeaderWrapper>
      <form onSubmit={(e) => {onSubmit(e)}} id="form">
        <div style={{marginLeft: '100px'}}>
          <Input type="" title="Name" placeholder="Andrew" margin="30px 0px" required width="200px"/>
          <Input type="" title="Phone Number" placeholder="925-111-2222" margin="30px 0px" required width="200px"/>
          <Input type="" title="Personal Email" placeholder="talenthatched@gmail.com" margin="30px 0px" required width="500px"/>
        </div>
        <FormButton/>
      </form>
    </JobSearch1Wrapper>
  )
}

export default JobSearch1