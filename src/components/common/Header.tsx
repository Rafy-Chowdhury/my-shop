import React from 'react';
import {
  Container,
  Nav,
  Navbar,
  InputGroup,
  FormControl,
  Button,
} from 'react-bootstrap';
import { FiPhoneCall, FiShoppingBag } from 'react-icons/fi';
import { FaRegEnvelope } from 'react-icons/fa';
import { BsPhone } from 'react-icons/bs';
import logo from '../../assets/images/myshop2.jpg';
import { BiSearch,BiUser } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { AppState } from '../../redux/store';
import { IProduct } from './../../Models/types';
import { Link } from 'react-router-dom';

const Header = () => {
  const cart: IProduct [] = useSelector((state: AppState) => state.cartReducer);

  return (
    <div className="header_component">
      <div className="top_header py-2 bg-light border-bottom">
        <Container className="d-flex justify-content-between">
          <ul className="list-unstyled d-flex align-items-center gap-4 ">
            <li>
              <FiPhoneCall />
              <a href="tel:0154789">0154789</a>
            </li>
            <li>
              <FaRegEnvelope />
              <a href="mail-to:support@myshop.com">support@myshop.com</a>
            </li>
          </ul>
          <div>
            <BsPhone />
            <a href="#">Save big on your app!</a>
          </div>
        </Container>
      </div>

      <div className="middle-header">
        <Container>
          <div className="d-flex align-items-center gap-5 py-3">
            <img className="branding" src={logo} alt="" />
            <InputGroup className="">
              <FormControl
                className="border border-primary"
                placeholder="Search here..."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button variant="primary" id="button-addon2">
                <BiSearch className="text-white" /> 
              </Button>
            </InputGroup>
            <ul className="icon-list list-unstyled d-flex gap-3">
              <li>
                <Link to="checkout">
                <FiShoppingBag/>
                <span className="badge bg-primary">{cart.length}</span>
                </Link>
                
              </li>
              <li>
                <BiUser/>
              </li>
            </ul>
          </div>
        </Container>
      </div>

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Categories</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home">News feed</Nav.Link>
            <Nav.Link href="#features">Merchant zone</Nav.Link>
            <Nav.Link href="#pricing">Help</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
