import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CleanUp from './CleanUp';
import ToDoList from './Components/TodoList';
import Product from './Pages/Product';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/nomade" element={<CleanUp />} />
        <Route path="/todolist" element={<ToDoList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
