import { useRef, useState } from "react"
import { FormButton } from "../../../components/buttons"
import { Input } from "../../../components/input"
import { FormPageWrapper } from "./style"
import Header from "../../../components/header"
import { BodyWrapper } from "../../../components/style"
import { name, phone } from "../../../components/inputValidation"

/*
Props:
*/

const Info = ({page, onBackClick, onNextClick, thisPage}) => {
  const fnameRef = useRef(null)
  const lnameRef = useRef(null)
  const phoneRef = useRef(null)
  const emailRef = useRef(null)
  
  const inputs = ["First Name", "Last Name", "Phone Number", "Personal Email"]
  const inputPlaceholders = ["Andrew", "Yang", "9251112222", "talenthatched@gmail.com"]
  const inputWidths = ['200px', '200px', '200px', '500px']
  const inputInputTypes = ["text", "text", "tel", "email"]
  const inputInvalid = [name, name, phone, null]
  const inputOnInput = [name, name, phone, null]
  const inputRefs = [fnameRef, lnameRef, phoneRef, emailRef]

  const onSubmit = (e) => {
    console.log(fnameRef.current.value, lnameRef.current.value, phoneRef.current.value, emailRef.current.value,)
    e.preventDefault()
    onNextClick()
  }
  //if customValidity is set to anything other then "", it will give error, so need to reset it onChange

  return (
    <FormPageWrapper page={page} thisPage={thisPage}>
      <Header text="Tell us some Info" onClick={onBackClick}/>
      <form onSubmit={onSubmit}>
        <BodyWrapper>
          {inputs.map((title, index) => {
            return (
              <Input
                key={title}
                type=""
                inputType={inputInputTypes[index]}
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
                maxLength={35}
                onInvalid={inputInvalid[index]}
                onInput={inputOnInput[index]}
                inputRef={inputRefs[index]}
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