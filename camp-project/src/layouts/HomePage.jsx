import React from 'react'
import {
    Container,
    Grid,
    Header,
    Image,
    List,
    Segment
  } from 'semantic-ui-react'
  import JobAdvertisementList from '../pages/JobAdvertisement/JobAdvertisementList'

export default function HomePage() {
    return (
<div>
        <JobAdvertisementList/>
    
        <Segment inverted vertical  style={{marginTop:'10em'}}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={5}>
                <Header inverted as='h3' content='Hakkımızda' style={{marginTop:'3em'}}/>
                <List link inverted>
                  <List.Item as='a'>Yönetim Kadrosu</List.Item>
                  <List.Item as='a'>Ürün ve Hizmetlerimiz</List.Item>
                  <List.Item as='a'>HRMS.Net'te Kariyer</List.Item>
                  <List.Item as='a'>İletişim</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={4}>
                <Header inverted as='h3' content='Servisler' style={{marginTop:'3em'}}/>
                <List link inverted>
                  <List.Item as='a'>Sıkça Sorulan Sorular</List.Item>
                  <List.Item as='a'>Yardım</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={4}>
                <Header as='h3' inverted style={{marginTop:'3em'}}>
                   Bizi Takip Edin
                </Header>
                 <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt8bojXQeoxU1MbBDL-wSm8Kp0dwZPuGrY8w&usqp=CAU"/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
      </div>

    )
}
