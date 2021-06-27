import React, { useState } from 'react'
import { Container, Menu } from 'semantic-ui-react'
import CandidateSignedOut from './CandidateSignedOut'
import CandidateSignedIn from './CandidateSignedIn'
import EmployerSignedOut from './EmployerSignedOut'


export default function Navi() {

  const [isAuthenticated, setIsAuthenticated] = useState(false)


  return (
    <div>
      <Menu inverted size='medium'>
        <Container>
          <Menu.Item
            name='HRMS'

          />
          <Menu.Item
            name='Ana sayfa'

          />
          <Menu.Item
            name=' iş ilanları'

          />


          <Menu.Menu position='right'>

            {isAuthenticated ? <CandidateSignedIn /> : <CandidateSignedOut />}
            <EmployerSignedOut />

          </Menu.Menu>
        </Container>
      </Menu>

    </div>
  )
}
