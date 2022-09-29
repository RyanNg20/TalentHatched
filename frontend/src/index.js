import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Error from './pages/error';
import Flow from './pages/flow';
import ApplicantProfile from './pages/applicantPages/applicantProfile';
import Finish from './pages/applicantPages/finish';
import Info from './pages/applicantPages/info';
import Jobs from './pages/applicantPages/jobs';
import JobSearch1 from './pages/applicantPages/jobSearch1';
import JobSearch2 from './pages/applicantPages/jobSearch2';
import JobSettings from './pages/applicantPages/jobSettings';
import Projects from './pages/applicantPages/projects';
import Skills from './pages/applicantPages/skills';
import SoftSkills from './pages/applicantPages/softSkills';
import Welcome from './pages/applicantPages/welcome';
import Company from './pages/companyPages/company'
import CompanyProfile from './pages/companyPages/companyProfile';
import Details from './pages/companyPages/details';
import Entry from './pages/companyPages/entry';
import Incentives from './pages/companyPages/incentives';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children: [
      { path: "flow", element: <Flow/> },
      { path: "applicantProfile", element: <ApplicantProfile/> },
      { path: "finish", element: <Finish/> }, 
      { path: "info", element: <Info/> },
      { path: "jobs", element: <Jobs/> },
      { path: "jobSearch1", element: <JobSearch1/> },
      { path: "jobSearch2", element: <JobSearch2/> },
      { path: "jobSettings", element: <JobSettings/> },
      { path: "projects", element: <Projects/> },
      { path: "skills", element: <Skills/> },
      { path: "softSkills", element: <SoftSkills/> },
      { path: "welcome", element: <Welcome/> },
      { path: "company", element: <Company/> },
      { path: "companyProfile", element: <CompanyProfile/> },
      { path: "details", element: <Details/> },
      { path: "entry", element: <Entry/> },
      { path: "incentives", element: <Incentives/> },
    ]
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
