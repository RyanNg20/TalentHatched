import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { SubmitButton } from "../../../components/buttons"
import { Bold48, Bold24, Reg20 } from "../../../components/style"
import EntryImage from '../../../assets/images/entryImage.svg'
import { BottomWrapper, LeftWrapper } from "./style"
import Input from "../../../components/input"

/*
Props:
*/

const Entry = (props) => {
  const navigate = useNavigate()

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [submit, setSubmit] = useState(false)
  useEffect(() => {
    if (submit) navigate("/company")
  },[submit])

  const onSubmit = async () => {
    // backend stuff
    setSubmit(true)
  }

  return (
    <div>
      <Bold48 style={{marginBottom: '100px'}}>
        We simplify your recruitment process. <br/> Ready to get started?
      </Bold48>
      <BottomWrapper>
        <LeftWrapper onSubmit={() => {onSubmit()}}>
          <div>
            <Reg20>
              Login or Signup
            </Reg20>
            <Input title="Company Email" placeholder={"talenthatched@gmail.com"} type="default" margin="40px 0px 20px 0px" required onChange={(e) => {setEmail(e.target.value)}}/>
            <Input title="Password" placeholder={""} type="default" margin="20px 0px" required onChange={(e) => {setPassword(e.target.value)}}/>
          </div>
          <SubmitButton link="../company" title="Create Account" />
        </LeftWrapper>
        <img src={EntryImage}/>
      </BottomWrapper>
    </div>
  )
}

export default Entry