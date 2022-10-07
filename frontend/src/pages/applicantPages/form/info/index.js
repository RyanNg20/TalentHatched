import { useState } from "react"
import { FormButton, BackButton } from "../../../../components/buttons"
import { useNavigate } from "react-router-dom"
import Input from "../../../../components/input"
import { Bold48, HeaderWrapper } from "../../../../components/style"
import { FormPageWrapper } from "../style"

/*
Props:
*/

const Info = ({page, onBackClick, onNextClick}) => {
  const navigate = useNavigate()

  const [submit, setSubmit] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    onNextClick()
  }

  return (
    <FormPageWrapper page={page} thisPage={0}>
      <HeaderWrapper>
        <BackButton link={"/welcome"}/>
        <Bold48 style={{marginLeft: '50px'}}>
          Info
        </Bold48>
      </HeaderWrapper>
      <form onSubmit={(e) => {onSubmit(e)}} id="form">
        <div style={{marginLeft: '100px'}}>
          <Input type="" title="Name" placeholder="Andrew" margin="30px 0px" required width="200px"/>
          <Input type="" title="Phone Number" placeholder="925-111-2222" margin="30px 0px" required width="200px"/>
          <Input type="" title="Personal Email" placeholder="talenthatched@gmail.com" margin="30px 0px" required width="500px"/>
        </div>
        <FormButton type={'form'} margin="40px 0px"/>
      </form>
    </FormPageWrapper>
  )
}

export default Info