import React from 'react'
import { Menu, Dropdown, Image } from 'semantic-ui-react'

export default function CandidateSignedIn({ candidateSignOut }) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" />
                <Dropdown pointing="top left" text="Filiz">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info" />
                        <Dropdown.Item onClick={candidateSignOut} text="Çıkış Yap" icon="sign-out" />

                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
