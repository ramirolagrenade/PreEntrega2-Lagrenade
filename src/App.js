import './App.css' 
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom" 
import ItemListContainer from './Components/ItemListContainer/ItemListContainer' 
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer' 
import NavBar from './Components/Header/NavBar' 
import LogoMenu from './Components/Header/LogoM' 
import CartProvider from './context/CartContext'
import Cart from './Components/Cart/Cart'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <CartProvider>
        <div className='App-header'>
          <LogoMenu />
          <div className='justify-content-center menu2'>
            <NavBar />
          </div> 
        </div>
        <div className='fondo'>
          <Routes>
            <Route path={"/"} exact element={<ItemListContainer/>} />
            <Route path={"/genero/:id"} exact element={<ItemListContainer/>}/>
            <Route path={"/item/:id"} element={<ItemDetailContainer/>}/>
            <Route path={"/cart"} element={<Cart/>}/>
          </Routes>
        </div>
       </CartProvider>
      </BrowserRouter>

    </div>
  ) 
}

export default App 