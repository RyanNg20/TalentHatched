import { Outlet, Link } from "react-router-dom"
import Button from "../../components/button"

/*
Props:
*/

const Company = () => {
  return (
    <div>
      Company
      <Button link="../companyProfile"/>
    </div>
  )
}

export default Company