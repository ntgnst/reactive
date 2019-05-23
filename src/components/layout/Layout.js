import React from 'react';
import Header from './Header';
import Footer from './Footer';
import NavBar from './NavBar';

const Layout = props => (
  <div>
    <Header />
    <NavBar />
    {props.children}
    <Footer />
  </div>
);
export default Layout;
