import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Donate from './pages/Donate';
import Shop from './pages/Shop';
import Product from './pages/Product';
import Checkout from './pages/Checkout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="donate" element={<Donate />} />
        <Route path="shop" element={<Shop />} />
        <Route path="product" element={<Product />} />
      </Route>
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
}

export default App;
