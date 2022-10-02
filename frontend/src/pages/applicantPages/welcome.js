import { Outlet, Link } from "react-router-dom"
import { Button } from "../../components/buttons"

/*
Props:
*/

const Welcome = () => {
  return (
    <div>
      Welcome
      <Button link="../info"/>
    </div>
  )
}

export default Welcome