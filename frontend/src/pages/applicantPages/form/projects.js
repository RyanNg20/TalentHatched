import { useState } from "react"
import { FormButton, BackButton } from "../../../components/buttons"
import { useNavigate } from "react-router-dom"
import Input from "../../../components/input"
import { Bold48, HeaderWrapper, InputsWrapper } from "../../../components/style"
import { FormPageWrapper } from "./style"

/*
Props:
*/

const Projects = ({page, onNextClick, onBackClick, thisPage}) => {
  const onSubmit = (e) => {
    e.preventDefault()
    onNextClick()
  }

  return (
    <FormPageWrapper page={page} thisPage={thisPage}>
      <HeaderWrapper>
        <BackButton onClick={onBackClick}/>
        <Bold48 style={{marginLeft: '50px'}}>
          Do you have any projects?
        </Bold48>
      </HeaderWrapper>
      <form onSubmit={(e) => {onSubmit(e)}} id="form">
        <InputsWrapper>
          <div style={{display: 'flex'}}>
            <Input type="" title="Title" placeholder="Interpolation of the Quantum Realm" margin="30px 0px 0px 0px" required width="200px"/>
            <Input type="" title="Location" placeholder="https://talenthatched.com" margin="30px 0px 0px 0px" required width="200px" info="Where can employers find this project?"/>
          </div>
          <Input
            type="textarea"
            title="Description"
            placeholder="Talent Hatched is a multigenerational company looking to revolutionize the job market with new and 
              innovative ways to employ and fund lower education students through an app that connects students to job opportunities."
            margin="30px 0px 80px 0px"
            required
            width="800px"
            height="80px"
            info="What is this project about?"
          />
        </InputsWrapper>
        <FormButton/>
      </form>
    </FormPageWrapper>
  )
}

export default Projects