import requests from './httpService';


class ProductService{
     
    getProducts(): Promise<any> {
        return requests.get(`/product`);
    }

    getProductByID(id: string): Promise<any> {
        return requests.get(`/product/${id}`);
    }

    addProducts(body: {}): Promise<any> {
        return requests.post(`/product`, body);
    }

    updateProducts(id: string, body: {}): Promise<any> {
        return requests.post(`/product/${id}`, body);
    }

    deleteProducts(id: string): Promise<any> {
        return requests.delete(`/product/${id}`);
    }

}

export default new ProductService()