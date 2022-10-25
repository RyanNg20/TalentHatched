import { useRef, useState } from "react"
import { FormButton } from "../../../components/buttons"
import { Input } from "../../../components/input"
import { FormPageWrapper } from "./style"
import Header from "../../../components/header"
import { BodyWrapper } from "../../../components/style"
import { onlyLetters, phone } from "../../../components/inputValidation"

/*
Props:
*/

const Info = ({page, onBackClick, onNextClick, thisPage, fnameRef, lnameRef, phoneRef}) => {
  
  const inputs = ["First Name", "Last Name", "Phone Number"]
  const inputPlaceholders = ["Andrew", "Yang", "9251112222"]
  const inputWidths = ['200px', '200px', '200px']
  const inputInputTypes = ["text", "text", "tel"]
  const inputInvalid = [onlyLetters, onlyLetters, phone]
  const inputOnInput = [onlyLetters, onlyLetters, phone]
  const inputRefs = [fnameRef, lnameRef, phoneRef]

  const onSubmit = (e) => {
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