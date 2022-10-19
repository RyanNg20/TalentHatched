import { Outlet, Link } from "react-router-dom"
import { Button } from "../../../components/buttons"
import { Bold48, Column, Reg20, Row } from "../../../components/style"
import finishImage from "../../../assets/images/finishImage.svg"
import { FormPageWrapper } from "./style"


const Finish = ({page, thisPage, onNextClick, onBackClick}) => {
  return (
    <FormPageWrapper page={page} thisPage={thisPage}>
      <Row>
        <Column>
          <Bold48>
            Way to go!
          </Bold48>
          <Reg20 style={{margin: "20px 0px 40px 0px"}}>
            You've completed your profile
          </Reg20>
          <Button link="../applicantProfile" margin="20px 0px"/>
        </Column>
        <img src={finishImage}/>
      </Row>
    </FormPageWrapper>
  )
}

export default Finish