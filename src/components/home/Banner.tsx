import React from 'react';
import { Carousel, Col, Container, ListGroup, Row } from 'react-bootstrap';
import pic1 from '../../assets/images/pic1.png';
import pic2 from '../../assets/images/pic2.png';

const Banner = () => {
  return (
    <div>
      <Container className="carousel-container">
        <Row>
          <Col lg={3}>
            <ListGroup>
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Morbi leo risus</ListGroup.Item>
              <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Morbi leo risus</ListGroup.Item>
              <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
          </Col>

          <Col lg={9} className="mt-3">
            <Carousel className="carousel-items">
              <Carousel.Item>
                <img
                  className="img"
                  src={pic1}
                  alt="First slide"
                />

              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="img"
                  src={pic2}
                  alt="Second slide"
                />
                
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
