import React from 'react';
import './App.css';
import Sales from './components/Main/Sales';
import ProductMenu from './components/Main/ProductMenu';
import PortfolioMain from './components/Main/PortfolioMain';
import Partners from './components/Main/Partners';
import Reviews from './components/Main/Reviews';
import { Routes, Route } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import SalesPage from './pages/SalesPage';
import ClientReviews from './pages/ClientReviews';


function App() {
  return (
    <div className="App">


      <Routes>
        <Route path='/' element={[<Sales />,
        <ProductMenu />,
        <PortfolioMain />,
        <Partners />,
        <Reviews />]} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path='/sales' element={<SalesPage />} />
        <Route path='/reviews' element={<ClientReviews />} />
      </Routes>
    </div>
  );
}

export default App;
