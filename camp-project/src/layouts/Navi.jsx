import React, { useState } from 'react';
import { Container, Menu } from 'semantic-ui-react';
import CandidateSignedOut from './CandidateSignedOut';
import CandidateSignedIn from './CandidateSignedIn';
import EmployerSignedOut from './EmployerSignedOut';


export default function Navi() {

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  function handleCandidateSignOut() {
    setIsAuthenticated(false)
  }

  function handleCandidateSignIn() {
    setIsAuthenticated(true)
  }

  return (
    <div>

      <Menu size='medium'>
        <Container>
          <Menu.Item
            name='HRMS'

          />
          <Menu.Item
            name='Ana sayfa'

          />

          <Menu.Menu position='right'>

            {isAuthenticated ? <CandidateSignedIn candidateSignOut={handleCandidateSignOut} />
              : <CandidateSignedOut candidateSignIn={handleCandidateSignIn} />}

             <EmployerSignedOut/>

          </Menu.Menu>
        </Container>
      </Menu>
                  
    </div>
  );
}
