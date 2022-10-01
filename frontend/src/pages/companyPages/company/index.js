import { Outlet, Link } from "react-router-dom"
import Button from "../../../components/button"
import { Bold48 } from "../../../components/style"

/*
Props:
*/

const Company = () => {
  return (
    <div>
      <Bold48>
        Company
      </Bold48>
      <Button link="../companyProfile"/>
    </div>
  )
}

export default Company