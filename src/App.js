import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

import { CartProvider } from './context/CartContext';

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={'Bienvenido a Cyber-Market'} />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/category/:categoryId" element={<ItemListContainer greeting={'Productos filtrados por categoria'} />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App;
