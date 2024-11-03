import React from 'react'
import About from './pages/About'
import Cart from './pages/Cart'
import Catalog from './pages/Catalog'
import CreateOrder from './pages/CreateOrder'
import Index from './pages/Index'
import Login from './pages/Login'
import Product from './pages/Product'
import Profile from './pages/Profile'
import Registration from './pages/Registration'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
      <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/catalog' element={<Catalog/>}/>
        <Route path='/create_order' element={<CreateOrder/>}/>
        <Route path='/' element={<Index/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/registration' element={<Registration/>}/>
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App