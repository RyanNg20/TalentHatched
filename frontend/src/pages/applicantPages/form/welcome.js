import { Button } from "../../../components/buttons"
import { Bold48, Column, Reg20, Row } from "../../../components/style"
import welcomeImage from "../../../assets/images/welcomeImage.svg"
import { FormPageWrapper } from "./style"

/*
Props:
*/

const Welcome = ({page, onNextClick, thisPage}) => {
  return (
    <FormPageWrapper page={page} thisPage={thisPage}>
      <Row>
        <Column>
          <Bold48>
            Welcome
          </Bold48>
          <Reg20 style={{margin: "20px 0px 40px 0px"}}>
            Ready to set up your profile?
          </Reg20>
          <Button margin="20px 0px" onClick={() => {onNextClick()}}/>
        </Column>
        <img src={welcomeImage}/>
      </Row>
    </FormPageWrapper>
  )
}

export default Welcome