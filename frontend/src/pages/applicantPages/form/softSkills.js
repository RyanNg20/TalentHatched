import { useState, useRef, useEffect } from "react"
import { FormButton, SelectButton } from "../../../components/buttons"
import { BodyWrapper, Row } from "../../../components/style"
import { FormPageWrapper } from "./style"
import Header from "../../../components/header"

/*
Props:
*/

const SoftSkills = ({page, onBackClick, onNextClick, thisPage, softSkillNames, softSkills, setSoftSkills}) => {

  const inputRef = useRef()
  const onSubmit = (e) => {
    e.preventDefault()
    onNextClick()
  }
  const checkRequired = (temp) => {
    let count = 0
    temp.forEach((val, index) => {
      if (val) count++
    })
    if (count >= 3) return false
    return true
  }
  return (
    <FormPageWrapper page={page} thisPage={thisPage}>
      <Header text="What are your top three soft skills?" onClick={onBackClick}/>
      <form onSubmit={onSubmit}>
        <BodyWrapper>
          <Row style={{flexWrap: 'wrap'}}>
            {softSkillNames.map((skill, index) => {
              return(
                <SelectButton
                  title={skill}
                  margin="30px 15px 0px 15px"
                  key={skill}
                  selected={softSkills}
                  index={index}
                  inputRef={inputRef}
                  onClick={() => {
                    let temp = new Array(softSkills.length).fill(false)
                    temp.forEach((val, index) => {
                      temp[index] = softSkills[index]
                    })
                    temp[index] = !temp[index]
                    setSoftSkills(temp)

                    if (inputRef.current) {
                      if (checkRequired(temp)) inputRef.current.setCustomValidity("Please Select 3 Soft Skills")
                      else inputRef.current.setCustomValidity("")
                    }
                  }}
                />
              )
            })}
          </Row>
          <input 
            style={{pointerEvents: 'none', opacity: 0, marginLeft: 15, height: 0}}
            required={checkRequired(softSkills)}
            onInvalid={(e) => {
              e.target.setCustomValidity("Please Select 3 Soft Skills")
            }}
            ref={inputRef}
          />
        </BodyWrapper>
        <FormButton/>
      </form>
    </FormPageWrapper>
  )
}

export default SoftSkills