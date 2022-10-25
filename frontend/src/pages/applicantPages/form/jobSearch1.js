import { useRef } from "react"
import { FormButton } from "../../../components/buttons"
import { Input } from "../../../components/input"
import { FormPageWrapper } from "./style"
import Header from "../../../components/header"
import { BodyWrapper } from "../../../components/style"

/*
Props:
*/

const JobSearch1 = ({page, onNextClick, onBackClick, thisPage}) => {

  const workloadRef = useRef()
  const workloadRef2 = useRef()
  const worktypeRef = useRef()
  const skillsRef = useRef()

  const onSubmit = (e) => {
    e.preventDefault()
    onNextClick()
  }

  return (
    <FormPageWrapper page={page} thisPage={thisPage}>
      <Header text="What kind of job do you want?" onClick={onBackClick} />
      <form onSubmit={onSubmit}>
        <BodyWrapper>
          <Input 
            type="range"
            inputType="number"
            title="Workload"
            placeholder="24"
            placeholder2="40"
            style={{
              margin:"30px 0px", 
              transform: `translateX(${page==thisPage?0:page<thisPage?-100:100}vw)`,
              transition: 'transform 1s', pointerEvents: page==thisPage?'initial':'none',
              transitionDelay: `0ms`,
              transitionProperty: 'transform',
            }}
            required
            width="150px"
            info="How many hours do you want to work?"
            
            inputRef={workloadRef}
            inputRef2={workloadRef2}
          />
          <Input 
            type="dropdown" 
            title="Workplace Type" 
            placeholder="talenthatched@gmail.com" 
            style={{
              margin:"30px 0px",
              transform: `translateX(${page==thisPage?0:page<thisPage?-100:100}vw)`,
              transition: 'transform 1s', pointerEvents: page==thisPage?'initial':'none',
              transitionDelay: `75ms`,
              transitionProperty: 'transform',
            }}
            required
            width="500px"
            info="Where will you be working?"
            inputRef={worktypeRef}
          />
          <Input 
            type="autofill"
            title="Skills"
            placeholder="React"
            style={{
              margin:"30px 0px",
              transform: `translateX(${page==thisPage?0:page<thisPage?-100:100}vw)`,
              transition: 'transform 1s', pointerEvents: page==thisPage?'initial':'none',
              transitionDelay: `150ms`,
              transitionProperty: 'transform',
            }}
            required
            width="200px"
            info="What skills do you want to use on the job?"
            inputRef={skillsRef}
          />
        </BodyWrapper>
        <FormButton/>
      </form>
    </FormPageWrapper>
  )
}

export default JobSearch1