import { Outlet, Link } from "react-router-dom"
import Button from "../../../components/button"
import { BigBold } from "../../../components/style"

/*
Props:
*/

const Company = () => {
  return (
    <div>
      <BigBold>
        Company
      </BigBold>
      <Button link="../companyProfile"/>
    </div>
  )
}

export default Company