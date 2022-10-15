import { useState } from "react"
import { FormButton, BackButton } from "../../../../components/buttons"
import { useNavigate } from "react-router-dom"
import Input from "../../../../components/input"
import { Bold48, HeaderWrapper, InputsWrapper } from "../../../../components/style"
import { FormPageWrapper } from "../style"

/*
Props:
*/

const Skills = ({page, onBackClick, onNextClick, thisPage}) => {
  const onSubmit = (e) => {
    e.preventDefault()
    onNextClick()
  }

  return (
    <FormPageWrapper page={page} thisPage={thisPage}>
      <HeaderWrapper>
        <BackButton onClick={onBackClick}/>
        <Bold48 style={{marginLeft: '50px'}}>
          What are your hard skills?
        </Bold48>
      </HeaderWrapper>
      <form onSubmit={(e) => {onSubmit(e)}} id="form">
        <InputsWrapper>
          <div style={{display: 'flex'}}>
            <Input type="autofill" title="Skills" placeholder="React" margin="30px 0px 0px 0px" required width="300px"/>
            <Input type="" inputType={"number"} title="Years of Experience" placeholder="2" margin="30px 0px 0px 0px" required width="200px"/>
          </div>
          <Input 
            type="textarea"
            title="instruction"
            placeholder="At my chinese school there was an instructor who majored in computer science and he showed me the ropes of using React / React Native and I learned alot!"
            margin="30px 0px"
            required
            width="800px"
            info="How and where did you learn this skill?"
          />
        </InputsWrapper>
        <FormButton/>
      </form>
    </FormPageWrapper>
  )
}

export default Skills