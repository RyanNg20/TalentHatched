import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { BackButton, FormButton } from "../../../components/buttons"
import Input from "../../../components/input"
import { Bold48, HeaderWrapper } from "../../../components/style"

/*
Props:
*/

const Company = () => {
  const navigate = useNavigate()

  const onSubmit = (e) => {
    e.preventDefault()
    navigate("/companyProfile")
  }
  return (
    <>
      <HeaderWrapper>
        <BackButton link="../entry"/>
        <Bold48 style={{marginLeft: '50px'}}>
          Tell us about your company
        </Bold48>
      </HeaderWrapper>
      <form onSubmit={(e) => {onSubmit(e)}} id="form">
        <div style={{marginLeft: '100px'}}>
          <Input type="" title="Company Name" placeholder="Talent Hatched" margin="30px 0px" required width="400px"/>
          <Input type="" title="Phone Number" placeholder="925-111-2222" margin="30px 0px" required width="200px"/>
          <Input type="" title="Address" placeholder="Talent Hatched" margin="30px 0px" required width="500px"/>
          <Input type="" title="City" placeholder="Sacramento" margin="30px 0px" required width="400px"/>
          <Input type="" title="State" placeholder="California" margin="30px 0px" required width="300px"/>
          <Input type="" title="Zip Code" placeholder="21420" margin="30px 0px" required width="200px"/>
          <Input type="textarea" title="Company Description"  margin="30px 0px 60px 0px" width="600px"/>
        </div>
        <FormButton/>
      </form>
    </>
  )
}

export default Company