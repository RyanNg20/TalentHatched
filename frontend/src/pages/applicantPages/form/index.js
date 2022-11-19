import { useState, useRef, useEffect, useContext } from "react"
import Info from "./info"
import JobSearch1 from "./jobSearch1"
import JobSearch2 from "./jobSearch2"
import Projects from "./projects"
import Skills from "./skills"
import SoftSkills from "./softSkills"
import Welcome from "./welcome"
import { FormPagesWrapper } from "./style"
import Industry from "./industry"
import Finish from "./finish"
import UserContext from "../../../components/userContext"
import { useNavigate } from "react-router-dom"

const Form = () => {
  const navigate = useNavigate()
  const softSkillNames = [
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
  const industryNames = ["Information Technology","Medicine","Business","Agriculture","CTE"]
  const FormPages = [Welcome, Info, Industry, SoftSkills, Skills, Projects, Finish]

  const { uid } = useContext(UserContext)

  const [page, setPage] = useState(0)
  //soft skills
  const [softSkills, setSoftSkills] = useState(new Array(softSkillNames.length).fill(false))
  //info
  const fnameRef = useRef(null)
  const lnameRef = useRef(null)
  const phoneRef = useRef(null)
  //industries
  const industryRef1 = useRef(null)
  const industryRef2 = useRef(null)
  const industryRef3 = useRef(null)
  const industryRef4 = useRef(null)
  const industryRef5 = useRef(null)
  const industryRefs = [industryRef1, industryRef2, industryRef3, industryRef4, industryRef5]
  //hard skills
  const skillRef = useRef()
  const yoeRef = useRef()
  const instructionRef = useRef()
  //projects
  const titleRef = useRef()
  const locationRef = useRef()
  const descriptionRef = useRef()

  const storeUserData = async () => {
    if (
      fnameRef.current &&
      lnameRef.current &&
      softSkills &&
      industryRef1.current &&
      industryRef2.current &&
      industryRef3.current &&
      industryRef4.current &&
      industryRef5.current &&
      skillRef.current &&
      yoeRef.current &&
      instructionRef.current &&
      titleRef.current &&
      locationRef.current &&
      descriptionRef.current &&
      page == FormPages.length - 1
    ) {
      const industries = []
      industryRefs.forEach((industryRef, index) => {
        if (industryRef.current.checked) {
          industries.push(industryNames[index])
        }
      })
      const softSkillData = []
      softSkillNames.forEach((softSkillName, index) => {
        if (softSkills[index]) softSkillData.push(softSkillName)
      })
      const userData = {
        uid,
        fname: fnameRef.current.value,
        lname: lnameRef.current.value,
        phoneNumber: phoneRef.current.value,
        industries,
        softSkills: softSkillData,
        hardSkills: [{
          skill: skillRef.current.value,
          yoe: yoeRef.current.value,
          instruction: instructionRef.current.value
        }],
        projects: [{
          title: titleRef.current.value,
          location: locationRef.current.value,
          description: descriptionRef.current.value,
        }]
      }
      console.log(userData)
      const response = await fetch("/api/user", {
          method: "PUT",
          body: JSON.stringify(userData),
          headers: {
            "Content-Type": "application/json"
          }
      })
      if (response.ok) {
        const json = await response.json()
        console.log(json)
        navigate('../applicantProfile')
      }
      else alert("Could not update User")
    }
  }

  const onBackClick = async () => {
    if (page != 0) setPage((current) => current - 1)
  }
  const onNextClick = () => {
    if (page < FormPages.length - 1) setPage((current) => current + 1)
    else {
      storeUserData()
    }
  }

  return (
    <FormPagesWrapper page={page}>
      {FormPages.map((FormPage, index) => {
        return (
          <FormPage 
            page={page} 
            onBackClick={onBackClick} 
            onNextClick={onNextClick} 
            thisPage={index} 
            key={FormPage} 
            softSkillNames={softSkillNames}
            softSkills={softSkills}
            setSoftSkills={setSoftSkills}
            fnameRef={fnameRef}
            lnameRef={lnameRef}
            phoneRef={phoneRef}
            industryNames={industryNames}
            industryRefs={industryRefs}
            skillRef={skillRef}
            yoeRef={yoeRef}
            instructionRef={instructionRef}
            titleRef={titleRef}
            locationRef={locationRef}
            descriptionRef={descriptionRef}
          />
        )
      })}
    </FormPagesWrapper>
  )
}

export default Form