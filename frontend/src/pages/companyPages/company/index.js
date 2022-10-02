import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { SubmitButton } from "../../../components/buttons"
import { Bold48 } from "../../../components/style"

/*
Props:
*/

const Company = () => {
  const navigate = useNavigate()

  const [submit, setSubmit] = useState(false)


  return (
    <form onSubmit={() => {navigate("/companyProfile")}}>
      <Bold48 style={{marginBottom: '100px'}}>
        Tell us about your company
      </Bold48>
      <SubmitButton link="../companyProfile" />
    </form>
  )
}

export default Company