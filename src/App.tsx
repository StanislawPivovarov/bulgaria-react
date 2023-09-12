import React from 'react';
import './App.css';
import Sales from './components/Sales';
import Label from './components/Label';
import ProductMenu from './components/ProductMenu';
import PortfolioMain from './components/PortfolioMain';
import Partners from './components/Partners';
import Review from './components/Review';
import Reviews from './components/Reviews';

function App() {
  return (
    <div className="App">
      <Sales/>
      <ProductMenu/>
      <PortfolioMain/>
      <Partners/>
      <Reviews/>
    </div>
  );
}

export default App;
