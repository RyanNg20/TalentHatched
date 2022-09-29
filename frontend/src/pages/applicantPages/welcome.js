import { Outlet, Link } from "react-router-dom"
import Button from "../../components/button"

/*
Props:
*/

const Welcome = () => {
  return (
    <div>
      Welcome
      <Button link="company"/>
    </div>
  )
}

export default Welcome