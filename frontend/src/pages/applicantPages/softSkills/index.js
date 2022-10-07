import { useState } from "react"
import { Button, BackButton } from "../../../components/buttons"
import { useNavigate } from "react-router-dom"
import Input from "../../../components/input"
import { Bold48, HeaderWrapper } from "../../../components/style"
import { SoftSkillsWrapper } from "./style"

/*
Props:
*/

const SoftSkills = ({page, onBackClick, onNextClick}) => {

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
        <div style={{marginLeft: '100px'}}>
          <Input type="" title="Name" placeholder="Andrew" margin="30px 0px" required width="200px"/>
          <Input type="" title="Phone Number" placeholder="925-111-2222" margin="30px 0px" required width="200px"/>
          <Input type="" title="Personal Email" placeholder="talenthatched@gmail.com" margin="30px 0px" required width="500px"/>
        </div>
        <Button type={'form'}/>
      </form>
    </SoftSkillsWrapper>
  )
}

export default SoftSkills