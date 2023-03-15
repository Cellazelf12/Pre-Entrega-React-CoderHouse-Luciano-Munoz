import React from 'react';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

import './App.css';

const App = () => {

  return (
    <div>
      <Navbar />
      <ItemListContainer text={"Bienvenido a la tienda, próximamente estaran todos nuestros productos disponibles"} />
    </div>
  );
}

export default App;
