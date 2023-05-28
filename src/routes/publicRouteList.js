import Home from "../components/frontend/Home";
import About from "../components/frontend/About";
import Contact from "../components/frontend/Contact";
import ViewCategory from "../components/frontend/collections/ViewCategory";
import ViewProduct from "../components/frontend/collections/ViewProduct";
import ProductDetails from "../components/frontend/collections/ProductDetails";
import Cart from "../components/frontend/Cart";
import Checkout from "../components/frontend/Checkout";

import Login from "../components/frontend/auth/Login";
import Register from "../components/frontend/auth/Register";
import Page403 from "../components/errors/Page403";
import Page404 from "../components/errors/Page404";

import ViewAllProduct from "../components/frontend/products/ViewAllProduct"



const publicRouteList=[
    {path:'/', exact: true, name:'Home', component: Home},

    {path:'/about', exact: true, name:'About', component: About},
    {path:'/contact', exact: true, name:'Contact', component: Contact},
    {path:'/collections', exact: true, name:'ViewCategory', component: ViewCategory},
    {path:'/collections/:category_id', exact: true, name:'viewProduct', component: ViewProduct},
    {path:'/collections/:category_id/:product_id', exact: true, name:'ProductDetails', component: ProductDetails},

    {path:'/login', exact: true, name:'Login', component: Login},
    {path:'/register', exact: true, name:'Register', component: Register},

    {path:'/403', exact: true, name:'Page403', component: Page403},
    {path:'/404', exact: true, name:'Page404', component: Page404},
    
    {path:'/cart', exact: true, name:'cart', component: Cart},
    {path:'/checkout', exact: true, name:'Checkout', component: Checkout},

    {path:'/allProduct', exact: true, name:'ViewAllProduct', component: ViewAllProduct},




];

export default publicRouteList;
