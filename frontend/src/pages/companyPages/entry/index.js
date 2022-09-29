import { Outlet, Link } from "react-router-dom"
import Button from "../../../components/button"

/*
Props:
*/

const Entry = () => {
  return (
    <div>
      Entry
      <Button link="../company" title="company"/>
    </div>
  )
}

export default Entry