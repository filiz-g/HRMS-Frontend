import React, { useState, useEffect } from 'react'
import { Table } from 'semantic-ui-react'
import CandidateService from '../../Services/candidateService'



export default function CandidateList() {

    const [candidates, setCandidates] = useState([])

    useEffect(() => {
        let candidateService = new CandidateService()
        candidateService.getCandidates().then(result => setCandidates(result.data.data))
    })

    return (
        <div>
            <Table>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Ad</Table.HeaderCell>
                        <Table.HeaderCell>Soyad</Table.HeaderCell>
                        <Table.HeaderCell>Tc Kimlik Numarası</Table.HeaderCell>
                        <Table.HeaderCell>Doğum Tarihi</Table.HeaderCell>
                        <Table.HeaderCell>E-mail Adresi</Table.HeaderCell>
                        <Table.HeaderCell>Oluşturma Tarihi</Table.HeaderCell>
                        <Table.HeaderCell>Aktiflik Durumu</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {candidates.map(candidate => (
                        <Table.Row key={candidate.id}>
                            <Table.Cell>candidate.firstName</Table.Cell>
                            <Table.Cell>candidate.lastName</Table.Cell>
                            <Table.Cell>candidate.nationalityId</Table.Cell>
                            <Table.Cell>candidate.dateOfBirth</Table.Cell>
                            <Table.Cell>candidate.eMail</Table.Cell>
                            <Table.Cell>candidate.createdDate</Table.Cell>
                            <Table.Cell>candidate.isActive</Table.Cell>



                        </Table.Row>

                    ))}



                </Table.Body>
            </Table>

        </div>
    )
}
