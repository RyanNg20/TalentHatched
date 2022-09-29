import { Outlet, Link } from "react-router-dom"
import Button from "../../components/button"

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