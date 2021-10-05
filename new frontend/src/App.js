import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import Services from './components/Services';
import {productDataTwo } from './components/Products/data';
import { productData} from './components/Services/data';
import Feature from './components/Feature';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Services heading='What do we do?' data={productData} />
      <Feature />
      <Products heading='Choose your product' data={productDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;
