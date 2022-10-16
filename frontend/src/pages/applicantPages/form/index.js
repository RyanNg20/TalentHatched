import { useState } from "react"
import Info from "./info"
import JobSearch1 from "./jobSearch1"
import JobSearch2 from "./jobSearch2"
import Projects from "./projects"
import Skills from "./skills"
import SoftSkills from "./softSkills"
import Welcome from "./welcome"
import { FormPagesWrapper } from "./style"
import Industry from "./industry"

const Form = () => {
  const FormPages = [Welcome, Industry, Info, SoftSkills, Skills, Projects, JobSearch1, JobSearch2]

  
  const [page, setPage] = useState(0)

  const onBackClick = async () => {
    if (page != 0) setPage((current) => current - 1)
  }
  const onNextClick = () => {
    if (page != FormPages.length) setPage((current) => current + 1)
  }


  return (
    <FormPagesWrapper page={page}>
      {FormPages.map((FormPage, index) => {
        return (
          <FormPage page={page} onBackClick={onBackClick} onNextClick={onNextClick} thisPage={index}/>
        )
      })}
    </FormPagesWrapper>
  )
}

export default Form