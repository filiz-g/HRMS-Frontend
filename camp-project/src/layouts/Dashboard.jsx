import React from 'react'
import CandidateList from '../pages/Candidate/CandidateList'
import EmployerList from '../pages/Employer/EmployerList';
import EmployeeList from '../pages/Employee/EmployeeList';
import JobAdvertisementList from '../pages/JobAdvertisement/JobAdvertisementList';
import { Grid } from "semantic-ui-react";
import { Route } from 'react-router-dom';
import JobAdvertisementAdd from '../pages/JobAdvertisement/JobAdvertisementAdd';
import HomePage from './HomePage';

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column >
            <Route exact path="/candidates" component={CandidateList} />
            <Route exact path="/employers" component={EmployerList} />
            <Route exact path="/employers/:id" component={EmployerList} />
            <Route exact path="/employees" component={EmployeeList} />
            <Route exact path="/jobadvertisements" component={JobAdvertisementList} />
            <Route exact path="/jobAdvertisement/add" component={JobAdvertisementAdd} />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/home" component={HomePage} />







         
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}
