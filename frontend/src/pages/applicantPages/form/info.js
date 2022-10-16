import { useState } from "react"
import { FormButton } from "../../../components/buttons"
import Input from "../../../components/input"
import { FormPageWrapper } from "./style"
import Header from "../../../components/header"
import { BodyWrapper } from "../../../components/style"

/*
Props:
*/

const Info = ({page, onBackClick, onNextClick, thisPage}) => {

  const onSubmit = (e) => {
    e.preventDefault()
    onNextClick()
  }

  return (
    <FormPageWrapper page={page} thisPage={thisPage}>
      <Header text="Tell us some Info" onClick={onBackClick}/>
      <form onSubmit={(e) => {onSubmit(e)}} id="form">
        <BodyWrapper>
          <Input 
            type=""
            title="Name"
            placeholder="Andrew"
            style={{
              margin:"30px 0px", transform: `translateX(${page==thisPage?0:100}vw)`, transition: 'transform 1s', transitionDelay: '0ms', transitionProperty: 'transform'
            }} 
            required 
            width="200px"
          />
          <Input 
            type="" 
            title="Phone Number" 
            placeholder="925-111-2222" 
            style={{margin:"30px 0px", transform: `translateX(${page==thisPage?0:100}vw)`, transition: 'transform 1s', transitionDelay: '75ms', transitionProperty: 'transform'}} 
            required 
            width="200px"
          />
          <Input 
            type="" 
            title="Personal Email" 
            placeholder="talenthatched@gmail.com"
            style={{margin:"30px 0px", transform: `translateX(${page==thisPage?0:100}vw)`, transition: 'transform 1s', transitionDelay: '150ms', transitionProperty: 'transform'}}
            required
            width="500px"/>
        </BodyWrapper>
        <FormButton type={'form'} margin="40px 0px"/>
      </form>
    </FormPageWrapper>
  )
}

export default Info