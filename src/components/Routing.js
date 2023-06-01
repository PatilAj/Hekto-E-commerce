import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AboutUs from './AboutUs/AboutUs';
import Account from './Account/Account';
import BlogPage from './BlogPage/BlogPage';
import ContactUs from './ContactUs/ContactUs';
import FAQ from './FAQ/FAQ';
import Grid from './Grid/Grid';
import Hekto from './Hekto/Hekto';
import Home from './Home/Home';
import LeftSidebar from './LeftSidebar/LeftSidebar';
import Orders from './Orders/Orders';
import Product from './Product/Product';
import ShopList from './ShopList/ShopList';
import ShoppingCart from './ShoppingCart/ShoppingCart';
import SingleBlog from './SingleBlog/SingleBlog';
import NotFound from './NotFound/NotFound';
import NewAccount from './Account/NewAccount';

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/BlogPage" element={<BlogPage />} />
        <Route exact path="/ContactUs" element={<ContactUs />} />
        <Route exact path="/Account" element={<Account />} />
        <Route exact path="/NewAccount" element={<NewAccount />} />
        <Route exact path="/AboutUs" element={<AboutUs />} />
        <Route exact path="/Grid" element={<Grid />} />
        <Route exact path="/Product/:id" element={<Product />} />
        <Route exact path="/Orders" element={<Orders />} />
        <Route exact path="/SingleBlog" element={<SingleBlog />} />
        <Route exact path="/ShopList" element={<ShopList />} />
        <Route exact path="/LeftSideBar" element={<LeftSidebar />} />
        <Route exact path="/Hekto" element={<Hekto />} />
        <Route exact path="/ShoppingCart" element={<ShoppingCart />} />
        <Route exact path="/FAQ" element={<FAQ />} />
        <Route exact path="/NotFound" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default Routing;
