import React, { useState, useEffect } from 'react'
import { Header, Table } from 'semantic-ui-react'
import JobAdvertisementService from '../../Services/jobAdvertisementService';
const colors = ["teal"];

export default function JobAdvertisementList() {

    const [jobAdvertisements, setJobAdvertisements] = useState([])

    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService()
        jobAdvertisementService.getJobAdvertisements().then(result => setJobAdvertisements(result.data.data))
    }, [])

    return (
        <div>

            <Header as="h2">
                <Header.Content size='large '>İş İlanı Listesi</Header.Content>
            </Header>

            {colors.map((color) => (

                <Table color={color} key={color}>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
                            <Table.HeaderCell>Pozisyon</Table.HeaderCell>
                            <Table.HeaderCell>Telefon Numarası</Table.HeaderCell>
                            <Table.HeaderCell>Web Adresi</Table.HeaderCell>
                            <Table.HeaderCell> Şehir</Table.HeaderCell>
                            <Table.HeaderCell> Açık Pozisyon Sayısı</Table.HeaderCell>
                            <Table.HeaderCell> Minimum Maaş</Table.HeaderCell>
                            <Table.HeaderCell> Maksimum Maaş</Table.HeaderCell>
                            <Table.HeaderCell> Yayınlanma Tarihi</Table.HeaderCell>
                            <Table.HeaderCell> Son Başvuru Tarihi</Table.HeaderCell>
                            <Table.HeaderCell> Çalışma Şekli</Table.HeaderCell>
                            <Table.HeaderCell> Açıklama </Table.HeaderCell>
                            <Table.HeaderCell> Çalışma Süresi </Table.HeaderCell>



                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {jobAdvertisements.map((jobAdvertisement) => (
                            <Table.Row key={jobAdvertisement.id}>
                                <Table.Cell>{jobAdvertisement.employer.companyName}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.jobTitle.jobTitle}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.employer.phoneNumber}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.employer.webAddres}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.city.city}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.openPositionCount}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.salaryMin} </Table.Cell>
                                <Table.Cell>{jobAdvertisement.salaryMax} </Table.Cell>
                                <Table.Cell>{jobAdvertisement.publishedAt}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.deadline}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.workType.workType}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.description}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.workHour.workHour}</Table.Cell>





                            </Table.Row>

                        ))}


                    </Table.Body>
                </Table>

            ))}
        </div>

    )
}
