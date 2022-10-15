import { Link } from "react-router-dom"
import thLogo from "../assets/images/thlogo.svg"
import { Column, NavWrapper, Row, Line } from "./style"


const Navbar = (props) => {
  return (
    <Column>
      <Row style={{paddingBottom: 20, alignItems: 'center'}}>
        <img src={thLogo} height={60}/>
        <NavWrapper style={{marginLeft: "auto"}}>
          About
        </NavWrapper>
        <NavWrapper>
          Help
        </NavWrapper>
        <NavWrapper>
          Contact
        </NavWrapper>
        <NavWrapper>
          Dashboard
        </NavWrapper>
      </Row>
      <Line/>
    </Column>
  )
}

export default Navbar