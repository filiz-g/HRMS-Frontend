import React, { useState, useEffect } from 'react'
import { Header, Table } from 'semantic-ui-react'
import EmployeeService from '../../Services/employeeService'

const colors = ["teal"];

export default function EmployeeList() {

    const [employees, setEmployees] = useState([])

    useEffect(() => {
        let employeeService = new EmployeeService()
        employeeService.getEmployees().then(result => setEmployees(result.data.data))
    }, [])

    return (
        <div>
            <Header as="h2">
                <Header.Content size='large '>Sistem Çalışanı Listesi</Header.Content>
            </Header>

            {colors.map((color) => (

                <Table color={color} key={color}>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Ad</Table.HeaderCell>
                            <Table.HeaderCell>Soyad</Table.HeaderCell>
                            <Table.HeaderCell>E-mail</Table.HeaderCell>
                            <Table.HeaderCell>Oluşturma Tarihi</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {employees.map((employee) => (
                            <Table.Row key={employee.id}>
                                <Table.Cell>{employee.firstName}</Table.Cell>
                                <Table.Cell>{employee.lastName}</Table.Cell>
                                <Table.Cell>{employee.email}</Table.Cell>
                                <Table.Cell>{employee.createdDate}</Table.Cell>



                            </Table.Row>

                        ))}


                    </Table.Body>
                </Table>

            ))}
        </div>
    )
}
