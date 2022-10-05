import { Outlet, Link } from "react-router-dom"
import { Button } from "../../components/buttons"
import colors from "../../components/colors"
import { Reg20 } from "../../components/style"
import { Column, Row } from "../../components/tables/style"

/*
Props:
*/

const Details = () => {
  return (
    <div>
      details
      <Column>
        <Row style={{backgroundColor: colors.slate, height: 50, alignItems: 'center', padding: '10px 20px', transform: 'skew(-10deg)'}}>
          <Reg20 style={{margin: '0px 100px'}}>
            asd
          </Reg20>
          <Reg20 style={{margin: '0px 100px'}}>
            asgfd
          </Reg20>
          <Reg20 style={{margin: '0px 100px'}}>
            das
          </Reg20>
        </Row>
        <Row style={{backgroundColor: colors.slate, height: 50, alignItems: 'center', padding: '10px 20px', transform: 'skew(-10deg)'}}>
          <Reg20 style={{margin: '0px 100px'}}>
            ahgfsd
          </Reg20>
          <Reg20 style={{margin: '0px 100px'}}>
            aewr
          </Reg20>
          <Reg20 style={{margin: '0px 100px'}}>
            juyt
          </Reg20>
        </Row>
        <Row style={{backgroundColor: colors.slate, height: 50, alignItems: 'center', padding: '10px 20px', transform: 'skew(-10deg)'}}>
          <Reg20 style={{margin: '0px 100px'}}>
            ahgfsd
          </Reg20>
          <Reg20 style={{margin: '0px 100px'}}>
            aewr
          </Reg20>
          <Reg20 style={{margin: '0px 100px'}}>
            juyt
          </Reg20>
        </Row>
      </Column>
      <Button link="../incentives"/>
    </div>
  )
}

export default Details