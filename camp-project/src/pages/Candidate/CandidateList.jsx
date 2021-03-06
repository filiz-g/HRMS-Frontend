import React, { useState, useEffect } from 'react'
import { Header, Table } from 'semantic-ui-react'
import CandidateService from '../../Services/candidateService'

const colors = ["teal"];

export default function CandidateList() {

    const [candidates, setCandidates] = useState([])

    useEffect(() => {
        let candidateService = new CandidateService()
        candidateService.getCandidates().then(result => setCandidates(result.data.data))
    }, [])

    return (
        <div>

            <Header as="h2">
                <Header.Content size='large '>İş Arayanlar Listesi</Header.Content>
            </Header>

            {colors.map((color) => (

                <Table color={color} key={color}>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Ad</Table.HeaderCell>
                            <Table.HeaderCell>Soyad</Table.HeaderCell>
                            <Table.HeaderCell>Tc Kimlik Numarası</Table.HeaderCell>
                            <Table.HeaderCell>Doğum Tarihi</Table.HeaderCell>
                            <Table.HeaderCell>E-mail</Table.HeaderCell>
                            <Table.HeaderCell>Oluşturma Tarihi</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {candidates.map((candidate) => (
                            <Table.Row key={candidate.id}>
                                <Table.Cell>{candidate.firstName}</Table.Cell>
                                <Table.Cell>{candidate.lastName}</Table.Cell>
                                <Table.Cell>{candidate.identityNumber}</Table.Cell>
                                <Table.Cell>{candidate.dateOfBirth}</Table.Cell>
                                <Table.Cell>{candidate.email}</Table.Cell>
                                <Table.Cell>{candidate.createdDate}</Table.Cell>



                            </Table.Row>

                        ))}


                    </Table.Body>
                </Table>

            ))}

        </div>
    )

}
