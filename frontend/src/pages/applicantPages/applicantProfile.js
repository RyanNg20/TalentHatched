import { Outlet, Link } from "react-router-dom"
import { Button } from "../../components/buttons"
import { Bold24, Bold48, TablesWrapper } from "../../components/style"
import Tables from "../../components/tables"


/*
Props:
*/

const ApplicantProfile = () => {
  let jsTable = {
    Contact: {
      editable: true,
      rowWidth: [150, 200],
      rows: [
        ["talenthatched@gmail.com", "925-234-6543"],
      ]
    },
    Skillset: {
      editable: true,
      rowWidth: [100, 400],
      rows: [
        ["Field", "Value"],
        ["Pay", "20 - 35 hrs/week"],
        ["Mentorship", "I would like the workforce to treat me well!"],
        {
          "Soft Skills": {
            editable: true,
            rowWidth: ["33%", "33%", "33%"],
            rows: [
              ["Health Insurance", "Matching 401k", "Early Retirement"],
            ],
          },
        },
        {
          Projects: {
            editable: true,
            rowWidth: ["33%", "33%", "33%"],
            rows: [
              ["Title", "Site", "Decscription"],
              ["Portfolio", "https://hero...", "I learned this skill in swimming lesson"],
            ],
          },
        }
      ]
    }
  }
  return (
    <div>
      <Bold48>
        K. Martinez
      </Bold48>
      <TablesWrapper>
        <Tables jsTable={jsTable}/>
      </TablesWrapper>
    </div>
  )
}

export default ApplicantProfile