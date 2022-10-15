import { Outlet, Link } from "react-router-dom"
import { Button } from "../../../../components/buttons"
import { Bold48, Reg20 } from "../../../../components/style"
import welcomeImage from "../../../../assets/images/welcomeImage.svg"
import { LeftWrapper, WelcomeWrapper } from "./style"
import { FormPageWrapper } from "../style"

/*
Props:
*/

const Welcome = ({page, onNextClick, thisPage}) => {
  return (
    <FormPageWrapper page={page} thisPage={thisPage}>
      <WelcomeWrapper>
        <LeftWrapper>
          <Bold48>
            Welcome
          </Bold48>
          <Reg20 style={{margin: "20px 0px 40px 0px"}}>
            Ready to set up your profile?
          </Reg20>
          <Button margin="20px 0px" onClick={() => {onNextClick()}}/>
        </LeftWrapper>
        <img src={welcomeImage}/>
      </WelcomeWrapper>
    </FormPageWrapper>
  )
}

export default Welcome