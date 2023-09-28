import React from 'react';
import './App.css';
import Sales from './components/Main/Sales';
import ProductMenu from './components/Main/ProductMenu';
import PortfolioMain from './components/Main/PortfolioMain';
import Partners from './components/Main/Partners';
import Reviews from './components/Main/Reviews';
import { Routes, Route } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import SalesPage from './pages/Sales';
import ClientReviews from './pages/Reviews';
import Contacts from './pages/Contacts';
import About from './pages/About';
import Directions from './pages/Directions';
import Product from './pages/Product';
import Dictionary from './pages/Dictionary';
import Search from './pages/Search';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={[<Sales />,
        <ProductMenu />,
        <PortfolioMain />,
        <Partners />,
        <Reviews />]}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path='/sales' element={<SalesPage />}></Route>
        <Route path='/reviews' element={<ClientReviews />}></Route>
        <Route path='/contacts' element={<Contacts />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/direction:' element={<Directions/>}></Route>
        <Route path='/product' element={<Product/>}></Route>
        <Route path='/glossary' element={<Dictionary/>}></Route>
        <Route path='/search' element={<Search/>}></Route>
        

      </Routes>
    </div>
  );
}

export default App;
