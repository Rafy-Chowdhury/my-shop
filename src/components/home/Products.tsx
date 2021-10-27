import React from 'react';
import { Row, Container } from 'react-bootstrap';
import { IProduct } from '../../Models/types';
import Product from '../common/product';

import ProductsSkeleton from '../../skeletons/ProductsSkeleton';
interface IProps{
    products: IProduct[] | null;
    isLoading: boolean;
}


const Products = ({products, isLoading}: IProps) => {
    return (
        <div className="my-5">
        <Container>
            <h2 className="mb-4">Latest Products</h2>
            {
                isLoading && <ProductsSkeleton />
                
            }
            {
                !isLoading && 
                (<Row className="align-items-sketch">
                {
                    products?.map((product: IProduct) => (<Product key={product._id} product={product}/>))
                }
               
                </Row>)
            }
        
        </Container>
        </div>
    );
};

export default Products;