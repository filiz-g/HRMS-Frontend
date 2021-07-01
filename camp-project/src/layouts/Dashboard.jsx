import React from 'react'
import CandidateList from '../pages/Candidate/CandidateList'
import EmployerList from '../pages/Employer/EmployerList';
import { Grid } from "semantic-ui-react";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
          </Grid.Column>
          <Grid.Column width={12}>
            <CandidateList />

            <EmployerList />
          </Grid.Column>
                 
           
        </Grid.Row>
      </Grid>
    </div>
  )
}
