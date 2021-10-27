import React from 'react';
import Banner from './../../components/home/Banner';
import Products from './../../components/home/Products';
import ProductService from '../../services/ProductService';
import useAsync from '../../hooks/useAsync';

const Home = () => {

   const { data, isLoading } =  useAsync(ProductService.getProducts)


    return (
        <div>
            <Banner/>
            <Products isLoading={isLoading} products={data}/>
        </div>
    );
};

export default Home;