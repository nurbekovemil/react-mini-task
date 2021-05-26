import {useEffect, useState}from 'react'
import {Link, useParams} from 'react-router-dom'
import {Container, Row, Col, Card, Button} from 'react-bootstrap'
import {ArrowLeft} from 'react-bootstrap-icons'

export default function ServicePage() {
   const id = useParams().id
   const[services, setServices] = useState([])
   useEffect(() => {
      fetch(`https://60ab66305a4de40017cc9fbf.mockapi.io/api/category/${id}/service`)
      .then(res =>res.json())
      .then(data => setServices(data))
      .catch(err => setServices(err))
   }, [])
   return (
      <Container>
         <Row  className="mt-3">
            <Col>
               <h2>Сервисы</h2>
            </Col>
            <Col className="d-flex justify-content-end">
               <Link to="/">
                  <Button variant="light">
                     <ArrowLeft className="mr-2"/>
                     Категории
                  </Button>
               </Link>
            </Col>
         </Row>
         <Row className="mt-1">
            {
               services.length > 0 ? services.map(service => (
                  <Col xs={3} sm={3} md={3} key={service.id} className="pl-xs-0 pl-sm-1 pl-md-2">
                     <Card className="mt-2">
                        <Card.Img variant="top" src={service.logo}/>
                        <Card.Body className="p-xs-0  p-sm-2 p-md-3">
                        <Card.Link href={service.link} target="_blank">
                           <Card.Title className="cuntom">{service.title}</Card.Title>
                        </Card.Link>
                        </Card.Body>
                     </Card>
                  </Col>
               )) : <h5 className="ml-3">Загрузка...</h5>
            }
         </Row>
      </Container>
   )
}
