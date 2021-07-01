import React, { useState, useEffect } from 'react'
import {Header, Table } from 'semantic-ui-react'
import EmployerService from '../../Services/employerService';

const colors = ["teal"];

export default function EmployerList() {

    const [employers, setEmployers] = useState([])

    useEffect(() => {
        let employerService = new EmployerService()
        employerService.getEmployers().then(result => setEmployers(result.data.data))
    }, [])

    return (
        <div>
            <Header as="h2">
                <Header.Content size='large '>İşverenler Listesi</Header.Content>
            </Header>
            {colors.map((color) => (

                <Table color={color} key={color}>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
                            <Table.HeaderCell>Telefon Numarası</Table.HeaderCell>
                            <Table.HeaderCell>Web Adresi</Table.HeaderCell>
                            <Table.HeaderCell>E-mail</Table.HeaderCell>
                            <Table.HeaderCell>Oluşturma Tarihi</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {employers.map((employer) => (
                            <Table.Row key={employer.id}>
                                <Table.Cell>{employer.companyName}</Table.Cell>
                                <Table.Cell>{employer.phoneNumber}</Table.Cell>
                                <Table.Cell>{employer.webAddres}</Table.Cell>
                                <Table.Cell>{employer.email}</Table.Cell>
                                <Table.Cell>{employer.createdDate}</Table.Cell>



                            </Table.Row>

                        ))}


                    </Table.Body>
                </Table>

            ))}

        </div>
    )

}


