import { useState } from "react"
import { Outlet, Link } from "react-router-dom"
import Button from "../../../components/button"
import { Bold48, Bold24, Reg20 } from "../../../components/style"
import EntryImage from '../../../assets/images/entryImage.svg'
import { BottomWrapper, LeftWrapper } from "./style"
import Input from "../../../components/input"

/*
Props:
*/

const Entry = (props) => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  console.log(props)

  return (
    <div>
      <Bold48 style={{marginBottom: '100px'}}>
        We simplify your recruitment process. <br/> Ready to get started?
      </Bold48>
      <BottomWrapper>
        <LeftWrapper onSubmit={() => {console.log('hi')}}>
          <div>
            <Reg20>
              Login or Signup
            </Reg20>
            <Input title="Company Email" placeholder={"talenthatched@gmail.com"} type="default" margin="40px 0px 20px 0px" required onChange={(e) => {setEmail(e.target.value)}}/>
            <Input title="Password" placeholder={""} type="default" margin="20px 0px" required onChange={(e) => {setPassword(e.target.value)}}/>
          </div>
          <Button link="../company" title="Create Account" />
        </LeftWrapper>
        <img src={EntryImage}/>
      </BottomWrapper>
    </div>
  )
}

export default Entry