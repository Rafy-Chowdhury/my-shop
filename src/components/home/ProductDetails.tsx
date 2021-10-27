import React, {useCallback} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAsync from '../../hooks/useAsync';
import ProductService from '../../services/ProductService';
import ImageUrlParser from '../../utils/ImageUrlParser';
import { IProduct } from './../../Models/types';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { addToCart } from './../../redux/actions/cartAction';
interface IParams{
    
    id: string;
}

const ProductDetails = () => {
    
    const { id } = useParams<IParams>();

    
    const getProduct = useCallback(() => {
        return ProductService.getProductByID(id);
     
      }, [id]);

    const dispatch = useDispatch();


    const { data, isLoading, isSuccess, isError, error } = useAsync<IProduct>(getProduct);

    const { name, image, description, price } = (data || {}) as IProduct

    return (
        <div className="product-details-component my-5">
          
            <Container>
                <div className="wrapper bg-white rounded">
                    {
                        isLoading && <h3>Loading...</h3>
                    }
                    {
                        isSuccess && <Row>
                            <Col md={4}>
                            <img src={ImageUrlParser(data ? image : "" )} alt={name} />
                            </Col>
                            <Col md={8}>
                               <h3 className="mb-3">{name}</h3> 
                               <h1>{price}</h1>
                               <button onClick={() => dispatch(addToCart(data as IProduct))}
                                className= "btn btn-primary">
                                <AiOutlineShoppingCart />
                                Add to cart
                               </button>
                               <p className= "mt-4">{description}</p>
                            </Col>
                        </Row>
                    }
                    {
                        isError && <h3>{error}</h3>
                    }

                </div>
            </Container>
        </div>
    );
};

export default ProductDetails;