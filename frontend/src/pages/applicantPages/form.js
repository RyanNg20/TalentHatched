import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "../../components/buttons"
import { PageWrapper } from "../../components/style"
import Info from "./info"
import JobSearch1 from "./jobSearch1"
import JobSearch2 from "./jobSearch2/jobSearch2"
import Projects from "./projects"
import Skills from "./skills"
import SoftSkills from "./softSkills"

/*
Props:
*/

const Form = () => {
  const navigate = useNavigate()

  const [page, setPage] = useState(0)
  const onBackClick = async () => {
    if (page != 0) setPage(page - 1)
  }
  const onNextClick = () => {
    if (page!= 5) setPage(page + 1)
  }

  const FormPages = [Info, SoftSkills, Skills, Projects, JobSearch1, JobSearch2]

  return (
    <div style={{position: 'relative', height: 500 }}>
        {FormPages.map((FormPage, index) => {
          return (
            <FormPage page={page} onBackClick={onBackClick} onNextClick={onNextClick}/>
          )
        })}
    </div>
  )
}

export default Form