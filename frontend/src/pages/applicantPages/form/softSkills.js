import { useState, useRef, useEffect } from "react"
import { FormButton, SelectButton } from "../../../components/buttons"
import { BodyWrapper, Row } from "../../../components/style"
import { FormPageWrapper } from "./style"
import Header from "../../../components/header"

/*
Props:
*/

const SoftSkills = ({page, onBackClick, onNextClick, thisPage}) => {

  const skillArray = [
    "Adaptability",
    "Communication",
    "Conflict Management",
    "Creativity",
    "Customer Service",
    "Emotional Intelligence",
    "Teamwork",
    "Time Management",
    "Problem Solving",
    "Willingness to Learn",
  ]
  const [disable, setDisable] = useState(new Array(skillArray.length).fill(true))
  const inputRef = useRef()
  const onSubmit = (e) => {
    e.preventDefault()
    console.log(disable)
    onNextClick()
  }
  const checkRequired = (temp) => {
    let count = 0
    temp.forEach((val, index) => {
      if (!val) count++
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
            {skillArray.map((skill, index) => {
              return(
                <SelectButton
                  title={skill}
                  margin="30px 15px 0px 15px"
                  key={skill}
                  disable={disable}
                  setDisable={setDisable}
                  index={index}
                  inputRef={inputRef}
                  onClick={() => {
                    let temp = new Array(disable.length).fill(true)
                    temp.forEach((val, index) => {
                      temp[index] = disable[index]
                    })
                    temp[index] = !temp[index]
                    setDisable(temp)

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
            required={checkRequired(disable)}
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