import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
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
import Navbar from './components/navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="flow" element={ <Flow/> } />
        <Route path="applicantProfile" element={ <ApplicantProfile/> }/>
        <Route path="finish" element={ <Finish/> }/>
        <Route path="info" element={ <Info/> }/>
        <Route path="jobs" element={ <Jobs/> }/>
        <Route path="jobSearch1" element={ <JobSearch1/> }/>
        <Route path="jobSearch2" element={ <JobSearch2/> }/>
        <Route path="jobSettings" element={ <JobSettings/> }/>
        <Route path="projects" element={ <Projects/> }/>
        <Route path="skills" element={ <Skills/> }/>
        <Route path="softSkills" element={ <SoftSkills/> }/>
        <Route path="welcome" element={ <Welcome/> }/>
        <Route path="company" element={ <Company/> }/>
        <Route path="companyProfile" element={ <CompanyProfile/> }/>
        <Route path="details" element={ <Details/> }/>
        <Route path="entry" element={ <Entry/> }/>
        <Route path="incentives" element={ <Incentives/> }/>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
