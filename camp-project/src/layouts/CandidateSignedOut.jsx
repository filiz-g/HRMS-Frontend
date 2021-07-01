import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

const colors = ["teal"];

export default function CandidateSignedOut({ candidateSignIn }) {
  return (
    <div>
            {colors.map((color) => (

      <Menu.Item  >
        <Button onClick={candidateSignIn} color={color} key={color} >Üye Girişi</Button>
        <Button  color={color} key={color} style={{ marginLeft: '0.5em' }}>Üye Ol</Button>
      </Menu.Item>

            ))}
    </div>
  )
}
