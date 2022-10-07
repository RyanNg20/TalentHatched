import { Outlet, Link } from "react-router-dom"
import { Button } from "../../components/buttons"

/*
Props:
*/

const Welcome = () => {
  return (
    <div>
      Welcome
      <Button link="../form"/>
    </div>
  )
}

export default Welcome