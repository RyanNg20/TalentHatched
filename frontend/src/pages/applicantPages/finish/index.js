import { Outlet, Link } from "react-router-dom"
import { Button } from "../../../components/buttons"
import { Bold48, Reg20 } from "../../../components/style"
import finishImage from "../../../assets/images/finishImage.svg"
import { LeftWrapper, WelcomeWrapper } from "./style"

/*
Props:
*/

const Finish = () => {
  return (
    <WelcomeWrapper>
      <LeftWrapper>
        <Bold48>
          Way to go!
        </Bold48>
        <Reg20 style={{margin: "20px 0px 40px 0px"}}>
          You've completed your profile
        </Reg20>
        <Button link="../applicantProfile" margin="20px 0px"/>
      </LeftWrapper>
      <img src={finishImage}/>
    </WelcomeWrapper>
  )
}

export default Finish