import { useState } from "react"
import { FormButton } from "../../../components/buttons"
import Input from "../../../components/input"
import { BodyWrapper, FormPageWrapper } from "./style"
import Header from "../../../components/header"

/*
Props:
*/

const Industry = ({page, onBackClick, onNextClick, thisPage}) => {

  const onSubmit = (e) => {
    e.preventDefault()
    onNextClick()
  }

  return (
    <FormPageWrapper page={page} thisPage={thisPage}>
      <Header text="Which industries are you interested in?" onClick={onBackClick}/>
      <form onSubmit={(e) => {onSubmit(e)}} id="form">
        <BodyWrapper>
          <Input type="" title="Name" placeholder="Andrew" margin="30px 0px" required width="200px"/>
          <Input type="" title="Phone Number" placeholder="925-111-2222" margin="30px 0px" required width="200px"/>
          <Input type="" title="Personal Email" placeholder="talenthatched@gmail.com" margin="30px 0px" required width="500px"/>
        </BodyWrapper>
        <FormButton type={'form'} margin="40px 0px"/>
      </form>
    </FormPageWrapper>
  )
}

export default Industry