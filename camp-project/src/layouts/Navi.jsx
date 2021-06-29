import React, { useState } from 'react';
import { Container, Menu } from 'semantic-ui-react';
import CandidateSignedOut from './CandidateSignedOut';
import CandidateSignedIn from './CandidateSignedIn';

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

            {isAuthenticated ? <CandidateSignedIn candidateSignOut={handleCandidateSignOut} />
              : <CandidateSignedOut candidateSignIn={handleCandidateSignIn} />}


          </Menu.Menu>
        </Container>
      </Menu>

    </div>
  );
}
