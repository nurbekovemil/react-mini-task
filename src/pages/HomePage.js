import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {Container, Row, Col, Card} from 'react-bootstrap'

export default function HomePage() {
   const [data, setData] = useState([])
   useEffect(() => {
      fetch('https://60ab66305a4de40017cc9fbf.mockapi.io/api/category?page=1&limit=20')
      .then(response => response.json())
      .then(data => setData(data))
   }, [])
   return (
      <Container>
         <h2 className="mt-3">Категории</h2>
         <Row className="mt-1">
            {
               data.length > 0 ? data.map(categ => (
                  <Col  xs={12} sm={12} md={3} key={categ.id}>
                     <Card className="mt-2">
                        <Card.Img variant="top" src={categ.logo}/>
                        <Card.Body>
                           <Card.Link as={Link} to={`/${categ.id}`}>
                              <Card.Title>{categ.title}</Card.Title>
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