import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Error from './pages/error';
import Flow from './pages/flow';
import ApplicantProfile from './pages/applicantPages/applicantProfile';
import Jobs from './pages/applicantPages/jobs';
import JobSettings from './pages/applicantPages/jobSettings';
import Company from './pages/companyPages/company'
import CompanyProfile from './pages/companyPages/companyProfile';
import Details from './pages/companyPages/details';
import Login from './pages/login';
import Incentives from './pages/companyPages/incentives';
import Navbar from './components/navbar';
import Form from './pages/applicantPages/form';
import { PageWrapper } from './components/style';
import Signup from './pages/signup';
import { UserProvider } from './components/userContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <Router>
        <PageWrapper>
          <Navbar/>
          <Routes>
            <Route path="" element={ <App/>} />
            <Route path="login" element={ <Login/> }/>
            <Route path="signup" element={ <Signup/> }/>
            <Route path="flow" element={ <Flow/> } />
            <Route path="applicantProfile" element={ <ApplicantProfile/> }/>
            <Route path="jobs" element={ <Jobs/> }/>
            <Route path="form" element={ <Form/> }/>
            <Route path="jobSettings" element={ <JobSettings/> }/>
            <Route path="company" element={ <Company/> }/>
            <Route path="companyProfile" element={ <CompanyProfile/> }/>
            <Route path="details" element={ <Details/> }/>
            <Route path="incentives" element={ <Incentives/> }/>
          </Routes>
        </PageWrapper>
      </Router>
    </UserProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
