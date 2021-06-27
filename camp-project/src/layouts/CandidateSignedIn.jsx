import React from 'react'
import { Menu,Dropdown,Image } from 'semantic-ui-react'

export default function CandidateSignedIn() {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right"/>
                <Dropdown pointing="top left" text="Filiz">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info"/>
                        <Dropdown.Item text="Çıkış Yap" icon="sign-out"/>

                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
