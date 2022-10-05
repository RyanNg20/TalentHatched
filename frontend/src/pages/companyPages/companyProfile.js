import { Outlet, Link } from "react-router-dom"
import { Button } from "../../components/buttons"
import Input from "../../components/input"
import { Bold48 } from "../../components/style"
import Tables from "../../components/tables"

/*
Props:
*/

const CompanyProfile = () => {
  let jsTable = {
    Details: {
      editable: true,
      rowWidth: [150, 200],
      rows: [
        ["Field", "Value"],
        ["Workload", "20 - 35 hrs/week"],
        ["Workplace Type", "Remote"],
        {
          Qualifications: {
            editable: true,
            rowWidth: [100, 120, 150],
            rows: [
              ["Qualifier", "Years of Experience", "Required?"],
              ["React", "2", "Yes"],
              ["CSS", "4", "Yes"],
            ],
          },
          Responsibilities: {
            editable: true,
            rowWidth: ["100%"],
            rows: [
              ["Description"],
              ["Applicant should be able to communicate effectively, work with 50IB loads"],
              ["Applicant should be able to code using React, read, and write the infrastructure..."],
            ]
          },
        }
      ]
    },
    Incentives: {
      editable: true,
      rowWidth: [100, 400],
      rows: [
        ["Field", "Value"],
        ["Pay", "20 - 35 hrs/week"],
        ["Mentorship", "I would like the workforce to treat me well!"],
        {
          Benefits: {
            editable: true,
            rowWidth: ["33%", "33%", "33%"],
            rows: [
              ["Health Insurance", "Matching 401k", "Early Retirement"],
            ],
          },
        }
      ]
    }
  }

  return (
    <div>
      <Bold48>
        CompanyProfile
      </Bold48>
      <div style={{overflowX: "auto", margin: "100px 0px"}}>
        <Tables jsTable={jsTable}/>
      </div>
      <Button link="../details"/>

    </div>
  )
}

export default CompanyProfile