import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Product from './Pages/Product';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
