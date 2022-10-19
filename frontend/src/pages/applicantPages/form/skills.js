import { useState, useRef } from "react"
import { FormButton } from "../../../components/buttons"
import { Input } from "../../../components/input"
import { Column, BodyWrapper, Row } from "../../../components/style"
import { FormPageWrapper } from "./style"
import Header from "../../../components/header"
import { onlyLetters } from "../../../components/inputValidation"

/*
Props:
*/

const Skills = ({page, onBackClick, onNextClick, thisPage}) => {

  const skillRef = useRef()
  const yoeRef = useRef()
  const instructionRef = useRef()

  const onSubmit = (e) => {
    console.log(skillRef.current.value, yoeRef.current.value, instructionRef.current.value)
    e.preventDefault()
    onNextClick()
  }

  return (
    <FormPageWrapper page={page} thisPage={thisPage}>
      <Header text="What are your hard skills?" onClick={onBackClick}/>
      <form onSubmit={onSubmit}>
        <BodyWrapper>
          <Column>
            <Row style={{transform: `translateX(${page==thisPage?0:page<thisPage?-100:100}vw)`, transition: 'transform 1s', pointerEvents: page==thisPage?'initial':'none',}}>
              <Input type="autofill" title="Skills" placeholder="React" style={{margin:"30px 0px"}} required width="300px" inputRef={skillRef} onInput={onlyLetters} onInvalid={onlyLetters}/>
              <Input type="" inputType={"number"} title="Years of Experience" placeholder="2" style={{margin:"30px 0px"}} required width="200px" inputRef={yoeRef}/>
            </Row>
            <Input 
              type="textarea"
              title="instruction"
              placeholder="At my chinese school there was an instructor who majored in computer science and he showed me the ropes of using React / React Native and I learned alot!"
              style={{transform: `translateX(${page==thisPage?0:page<thisPage?-100:100}vw)`, transition: 'transform 1s', transitionDelay: `75ms`, transitionProperty: 'transform', pointerEvents: page==thisPage?'initial':'none',}}
              required
              width="800px"
              info="How and where did you learn this skill?"
              inputRef={instructionRef}
              maxLength={300}
            />
          </Column>
        </BodyWrapper>
        <FormButton/>
      </form>
    </FormPageWrapper>
  )
}

export default Skills