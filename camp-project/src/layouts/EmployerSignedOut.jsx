import React from 'react'
import { Dropdown} from 'semantic-ui-react'


export default function EmployerSignedOut() {
    return (
        <div>
            
            <Dropdown  item primary text='İşveren'>
                <Dropdown.Menu>
                  <Dropdown.Item >Giriş Yap</Dropdown.Item>
                  <Dropdown.Item>Bilgi Al</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

        </div>
    )
}
