import { Outlet, Link } from "react-router-dom"
import { Button } from "../../components/buttons"

/*
Props:
*/

const Finish = () => {
  return (
    <div>
      Finish
      <Button link="../applicantProfile"/>
    </div>
  )
}

export default Finish