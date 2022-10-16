import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { BackButton, FormButton } from "../../../components/buttons"
import Header from "../../../components/header"
import Input from "../../../components/input"
import { Bold48, HeaderWrapper, BodyWrapper } from "../../../components/style"

/*
Props:
*/

const Company = () => {
  const navigate = useNavigate()

  const inputTitle = ["Company Name", "Phone Number", "Address", "City", "State", "Zip Code"]
  const inputPlaceholder = ["Talent Hatched", "925-111-2222", "3392 Walkway St", "Sacramento", "California", "21420"]
  const inputWidth = ["400px", "200px", "500px", "400px", "300px", "200px"]

  const onSubmit = (e) => {
    e.preventDefault()
    navigate("/companyProfile")
  }

  return (
    <>
      <Header link="../entry" text="Tell us about your company"/>
      <form onSubmit={(e) => {onSubmit(e)}} id="form">
        <BodyWrapper>
          {inputTitle.map((title, index) => {
            return (
              <Input type="" title={title} placeholder={inputPlaceholder[index]} style={{margin: "30px 0px"}} required width={inputWidth[index]} key={title}/>
            )
          })}
          <Input type="textarea" title="Company Description"  margin="30px 0px 60px 0px" width="600px"/>
        </BodyWrapper>
        <FormButton/>
      </form>
    </>
  )
}

export default Company