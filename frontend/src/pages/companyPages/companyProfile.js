import { Outlet, Link } from "react-router-dom"
import { Button } from "../../components/buttons"
import { Bold48 } from "../../components/style"

/*
Props:
*/

const CompanyProfile = () => {
  return (
    <div>
      <Bold48>
        CompanyProfile
      </Bold48>
      <Button link="../details"/>
    </div>
  )
}

export default CompanyProfile