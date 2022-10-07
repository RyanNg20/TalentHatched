import { Outlet, Link } from "react-router-dom"
import { Button } from "../../components/buttons"

/*
Props:
*/

const Welcome = () => {
  return (
    <div>
      Welcome
      <Button link="../form" margin="20px"/>
    </div>
  )
}

export default Welcome