import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IProduct } from '../../Models/types';
import ImageUrlParser from '../../utils/ImageUrlParser';
interface IProps{
  product: IProduct
}



const product = ({product}: IProps) => {
  const {
    name,
    image,
    _id
  } = product;

  return (
    <Col md={3} className="mb-3">
      <Link to={`/product${_id}`}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={ImageUrlParser(image)} />
        <Card.Body>
          <Card.Text>{name}</Card.Text>
        </Card.Body>
      </Card>
      </Link>
    </Col>
  );
};

export default product;
