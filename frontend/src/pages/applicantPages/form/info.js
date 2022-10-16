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
  const inputs = ["Name", "Phone Number", "Personal Email"]
  const inputPlaceholders = ["Andrew", "925-111-2222", "talenthatched@gmail.com"]
  const inputWidths = ['200px', '200px', '500px']
  return (
    <FormPageWrapper page={page} thisPage={thisPage}>
      <Header text="Tell us some Info" onClick={onBackClick}/>
      <form onSubmit={(e) => {onSubmit(e)}} id="form">
        <BodyWrapper>
          {inputs.map((title, index) => {
            return (
              <Input
                key={title}
                type=""
                title={title}
                placeholder={inputPlaceholders[index]}
                style={{
                  margin:"30px 0px",
                  transform: `translateX(${page==thisPage?0:page<thisPage?-100:100}vw)`,
                  transition: 'transform 1s',
                  transitionDelay: `${index * 75}ms`,
                  transitionProperty: 'transform',
                  pointerEvents: page==thisPage?'initial':'none',
                }} 
                required 
                width={inputWidths[index]}
              />
            )
          })}
        </BodyWrapper>
        <FormButton type={'form'}/>
      </form>
    </FormPageWrapper>
  )
}

export default Info