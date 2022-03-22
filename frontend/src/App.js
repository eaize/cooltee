import React from 'react'
import { Container } from 'react-bootstrap'
import { HashRouter as Router, Route } from 'react-router-dom'
import Header2 from './components/Header2'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import ProductListScreen from './screens/ProductListScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import OrderListScreen from './screens/OrderListScreen'
import "./App.css";
import "./styleguide.css"


function App() {
  return (
    <Router>
      <div>
          <Route path='/login' component={LoginScreen} className='logn'/>
          <Route path='/register' component={RegisterScreen} className='regis'/>
          <Route path='/' component={HomeScreen} exact />
      </div>
      <main className="py-3">
        <Container className='cnt'>
          <Route path='/shipping' component={ShippingScreen} />
          <Route path='/placeorder' component={PlaceOrderScreen} />
          <Route path='/order/:id' component={OrderScreen} />
          <Route path='/payment' component={PaymentScreen} />
          <Route path='/cart/:id?' component={CartScreen} />

          <Route path='/admin/userlist' component={UserListScreen} />
          <Route path='/admin/user/:id/edit' component={UserEditScreen} />

          <Route path='/admin/productlist' component={ProductListScreen} />
          <Route path='/admin/product/:id/edit' component={ProductEditScreen} />

          <Route path='/admin/orderlist' component={OrderListScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
export const homeData = {
  webBanner: "./images/web-banner@1x.png",
  title: "Cool Tees for",
  menWomen: "MEN & WOMEN",
  coolteesLogo1: "./images/cooltees-logo@1x.png",
  search: "./images/noun-search-2102816--2-@1x.png",
  cart: "./images/noun-cart-2102832--4-@1x.png",
  avatar: "./images/noun-avatar-2102861--2-@1x.png",
  selected: "Selected just for you",
  arrowLeft: "./images/noun-arrow-left-2682937-10@1x.png",
  arrowRight: './images/noun-arrow-left-2682937-11@1x.png',
  recommended: "Recommended Tees",
  fav: "Favourite Tees",
  coolteesLogo: "./images/cooltees-logo@1x.png",
  drink: <>Premium Quality soft drinks, hot drinks, soda &amp; energy drinks at the best and most affordable price.<br />we have a new offer every day for 365 days</>,
  place: "Contact",
  eMail: "E-maildrink@cooltees.com | Hotline: +1 131 138 138",
  design: "DESIGN BY COOLTEES - © 2022. ALL RIGHTS RESERVED.",
};
