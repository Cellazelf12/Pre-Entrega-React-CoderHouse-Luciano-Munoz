import React from 'react';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

const App = () => {

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<ItemListContainer text={"Bienvenido a Cyber Market"} />}></Route>
          <Route exact path="/category/:categoryId" element={<ItemListContainer text={'Productos filtrados por categoria'}/>}/>
          <Route exact path="/item/:itemName" element={<ItemDetailContainer />}/>
          <Route exact path='/carrito'></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
