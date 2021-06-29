import React from 'react'
import { Button, Menu } from 'semantic-ui-react'


export default function CandidateSignedOut({ candidateSignIn }) {
  return (
    <div>

      <Menu.Item>
        <Button onClick={candidateSignIn} primary >Üye Girişi</Button>
        <Button primary style={{ marginLeft: '0.5em' }}>Üye Ol</Button>
      </Menu.Item>


    </div>
  )
}
