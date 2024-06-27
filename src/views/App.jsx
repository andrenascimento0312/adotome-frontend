import React, { useState } from 'react';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';

import './App.sass';

import Home from './pages/Home';
import SingleDog from './pages/SingleDog';
import NotFound from './pages/NotFound';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() { 

  return (
    <>

      <BrowserRouter>

        <Header />

        <Routes>

          <Route path='/doguinho/:slug' element={<SingleDog />} />
          
          <Route exact path='/' element={<Home />} />

          <Route path='*' element={<NotFound />} />

        </Routes>

        <Footer />

      </BrowserRouter>
    </>
  );
}

export default App;
