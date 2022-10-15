import { Link, Outlet } from "react-router-dom"

const Flow = () => {
  return (
    <div>
      flow
      <Link to={"../form"}>
        Applicant
      </Link>
      <Link to={"../entry"}>
        Company
      </Link>
    </div>
  )
}

export default Flow