import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home.jsx'
import Contact from './Components/Contact.jsx'
import Signup from './Components/Signup.jsx'
import About from './Components/About'
import Login from './Components/Login.jsx'
import Footer from './Components/Footer.jsx'
// import Product from './Components/Product.jsx'
import PageNotFound from './Components/PageNotFound.jsx'
import Products from './Pages/Products.jsx'
import Cart from './Pages/Cart.jsx'
import Cart1 from './Components/Cart1.jsx'
// import Signup from './Components/Signup.jsx'

const App = () => {
  return (
    <>
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/cart1' element={<Cart1/>}/>

    <Route path='/signup' element={<Signup/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/product' element={<Products/>}/>


    <Route path='/cart' element={<Cart/>}/>

    <Route path='*' element={<PageNotFound/>}/>





   </Routes>
   <Footer/>
   </BrowserRouter>
   
   

    </>
   
  )
}

export default App