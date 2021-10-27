import React from 'react';
import { IProduct } from './../../Models/types';
import { Col, Row } from 'react-bootstrap';
import ImageUrlParser from './../../utils/ImageUrlParser';
import { useDispatch } from 'react-redux';
import { FaRegTimesCircle } from 'react-icons/fa';
import { removeFromCart } from '../../redux/actions/cartAction';


interface IProps {
    item: IProduct;
  }
const CartItem = ({ item }: IProps) => {
  const {_id, price} = item;

    const dispatch = useDispatch();
  return (
    <Row>
      <Col md={1}>
        <img className="img-fluid" src={ImageUrlParser(item.image)} alt="" />
      </Col>
      <Col>
        <h5 className="mt-4">{item.name}</h5>
      </Col>
      <Col md={2} className="d-flex justify-content-between align-items-center">
        <button
          onClick={() => dispatch(removeFromCart(_id as string))}
          className="btn">
        
          <FaRegTimesCircle />
        </button>
        <h6 className="m-0">৳ {price}</h6>
      </Col>
    </Row>
  );
};

export default CartItem;
