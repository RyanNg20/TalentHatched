import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { FormButton } from "../components/buttons"
import { Bold48, Bold24, Reg20, Column, Row, Reg18 } from "../components/style"
import EntryImage from '../assets/images/entryImage.svg'
import { Input } from "../components/input"
import colors from "../components/colors"

/*
Props:
*/

const Login = (props) => {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [disable, setDisable] = useState(true)

  useEffect(() => {
    if (sessionStorage.getItem("email")) setEmail(sessionStorage.getItem("email"))
    if (sessionStorage.getItem("password")) setPassword(sessionStorage.getItem("password"))
  }, [])

  useEffect(() => {
    if (email && password && disable) setDisable(false)
    else if (!email && !password && !disable) setDisable(true)
  }, [email, password])

  const onSubmit = async (e) => {
    e.preventDefault()
    // backend stuff
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("password", password);
    navigate("/flow")
  }

  return (
    <form onSubmit={(e) => {onSubmit(e)}}>
      <Row>
        <Column>
          <Bold48 style={{marginBottom: '20px'}}>
            Login
          </Bold48>
          <Row>
            <Reg18>
              Don't have an account?&nbsp;
            </Reg18>
            <Reg18 style={{color: colors.link}} onClick={() => {navigate('../signup')}}>
              Sign up
            </Reg18>
          </Row>
          <Input title="Email" placeholder={"talenthatched@gmail.com"} type="default" style={{margin: "40px 0px 20px 0px"}} required onChange={(e) => {setEmail(e.target.value)}} value={email}/>
          <Input title="Password" placeholder={""} type="default" style={{margin:"20px 0px"}} required onChange={(e) => {setPassword(e.target.value)}} value={password}/>
          <FormButton title="Log in" disable={disable}/>

        </Column>
        <img src={EntryImage}/>
      </Row>
    </form>
  )
}

export default Login