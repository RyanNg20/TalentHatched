import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "../../../components/buttons"
import { PageWrapper } from "../../../components/style"
import Info from "./info"
import JobSearch1 from "./jobSearch1"
import JobSearch2 from "./jobSearch2/jobSearch2"
import Projects from "./projects"
import Skills from "./skills"
import SoftSkills from "./softSkills"
import Welcome from "./welcome"
import { FormPagesWrapper } from "./style"
import Box from "./box"


/*
Props:
*/

const Form = () => {
  const navigate = useNavigate()
  // const FormPages = [Welcome, Info, SoftSkills, Skills, Projects, JobSearch1, JobSearch2]
  const FormPages = [Box, Box, Box, Box, Box, Box,]
  
  const [page, setPage] = useState(0)

  const onBackClick = async () => {
    if (page != 0) setPage(page - 1)
  }
  const onNextClick = () => {
    if (page != FormPages.length) setPage(page + 1)
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