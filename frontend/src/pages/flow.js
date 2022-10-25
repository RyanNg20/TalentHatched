import { Link, Outlet } from "react-router-dom"
import { Bold32, Bold48, Column, Reg16, Reg20, Row } from "../components/style"
import { BoxWrapper } from "./style"
import { IoPersonOutline, IoBusinessOutline } from "react-icons/io5"
import { useContext } from "react"
import UserContext from "../components/userContext"

const Flow = () => {
  const { uid } = useContext(UserContext)

  const onOptionClick = async (type) => {
    if (uid) {
      const response = await fetch("/api/user", {
        method: "PUT",
        body: JSON.stringify({ uid, type }),
        headers: {
          "Content-Type": "application/json"
        }
      })
      if (response.ok) {
        const json = await response.json()
        console.log(json)
      }
      else alert("could not update user")
    }
  }

  return (
    <Column>
      <Bold48 style={{marginBottom: 100}}>
        Are you a ...
      </Bold48>
      <Row style={{alignItems: 'center'}}>
        <Link to={"../form"} style={{textDecoration: 'none'}} onClick={() => {onOptionClick("student")}}>
          <BoxWrapper>
            <IoPersonOutline size={30}/>
            <Bold32 style={{margin: 15}}>
              Student
            </Bold32>
            <Reg20>
              We will help you find jobs
            </Reg20>
          </BoxWrapper>
        </Link>
        <Reg20 style={{margin: 20}}>
          - or -
        </Reg20>
        {/* <Link to={"../company"} style={{textDecoration: 'none'}}>
          <BoxWrapper>
            <IoBusinessOutline size={30}/>
            <Bold32 style={{margin: 15}}>
              Company
            </Bold32>
            <Reg20>
              We will help you find Employees
            </Reg20>
          </BoxWrapper>
        </Link> */}
      </Row>
    </Column>
  )
}

export default Flow