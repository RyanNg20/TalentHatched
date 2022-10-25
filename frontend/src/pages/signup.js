import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { FormButton } from "../components/buttons"
import { Bold48, Bold24, Reg20, Column, Row, Reg18 } from "../components/style"
import EntryImage from '../assets/images/entryImage.svg'
import { Input } from "../components/input"
import colors from "../components/colors"
import UserContext from "../components/userContext"

/*
Props:
*/

const Signup = (props) => {
  const navigate = useNavigate()

  const { uid, setUid } = useContext(UserContext)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
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
    const response = await fetch('/api/user', {
      method: "POST",
      body: JSON.stringify({email, password}),
      headers: {
        "Content-Type": "application/json"
      }
    })
    if (response.ok) {
      const json = await response.json()
      console.log(json)
      if (json.type) {
        if (json.fname && json.lname) navigate('/applicantProfile')
        else navigate('/form')
      }
      else navigate("/flow")
      setUid(json._id)
    } else {
      const text = await response.text()
      alert(text)
    }

    sessionStorage.setItem("email", email);
    sessionStorage.setItem("password", password);
  }

  return (
    <form onSubmit={(e) => {onSubmit(e)}}>
      <Row>
        <Column>
          <Bold48 style={{marginBottom: '20px'}}>
            Sign Up
          </Bold48>
          <Row>
            <Reg18>
              Already have an account?&nbsp;
            </Reg18>
            <Reg18 style={{color: colors.link, cursor: "pointer" }} onClick={() => {navigate('../login')}}>
              Log in
            </Reg18>
          </Row>
          <Input
            title="Email"
            placeholder={"talenthatched@gmail.com"}
            type="default"
            style={{margin: "40px 0px 20px 0px"}}
            required
            onChange={(e) => {setEmail(e.target.value)}}
            value={email}
          />
          <Input 
            title="Password"
            placeholder={""}
            type="default"
            style={{margin:"20px 0px"}}
            required
            onChange={(e) => {setPassword(e.target.value)}}
            value={password}
            inputType="password"
          />
          {/* <Input 
            title="Confirm Password"
            placeholder={""}
            type="default"
            style={{margin:"20px 0px"}}
            required
            onChange={(e) => {setConfirmPassword(e.target.value)}}
            value={password}
            inputType="password"
          /> */}
          <FormButton title="Create Account" disable={disable}/>
        </Column>
        <img src={EntryImage} style={{marginLeft: 100}}/>
      </Row>
    </form>
  )
}

export default Signup