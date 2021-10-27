import React, { Suspense } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
    
} from "react-router-dom";
import NotFound from './components/NotFound';
const ProductDetails = React.lazy(() => import('./components/home/ProductDetails'));
const Home = React.lazy(() => import('./pages/Home/Home'));
const Help = React.lazy(() => import('./pages/Help/Help'));
const Checkout = React.lazy (() => import ('./pages/checkout/Checkout'));


const AppRouter: React.FC = ({children}) => {
    return ( 
        <Router>
            {
                children
            }
            <Switch>
                <Suspense fallback={<div>loading...</div>}>
                <Route exact path = "/" component={Home} />
                <Route path = "/help" component={Help} />
                <Route path = "/product:id" component={ProductDetails} />
                <Route path="/checkout" component={Checkout} />
               
                </Suspense>
                <Route path = "*" ><NotFound /></Route>
            </Switch>
            
        </Router>
    );
};

export default AppRouter;