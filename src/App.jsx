import React,{useState} from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home.jsx'
import Contact from './Components/Contact.jsx'
import Signup from './Components/Signup.jsx'
import About from './Components/About'
import Login from './Components/Login.jsx'
import Footer from './Components/Footer.jsx'
import Logout from './Components/Logout.jsx'
import MyAccount from './Components/MyAccount.jsx'


// import Product from './Components/Product.jsx'
import PageNotFound from './Components/PageNotFound.jsx'
import Products from './Pages/Products.jsx'
import Cart from './Pages/Cart.jsx'
import CartProduct from './Components/CartProduct.jsx'
// import Signup from './Components/Signup.jsx'

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
   <BrowserRouter>
   <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
   <Routes>
    <Route path='/home' element={<Home/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/about' element={<About/>}/>

    <Route path='/' element={<Signup/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/product' element={<Products searchTerm={searchTerm}/>}/>
    <Route path='/myaccont' element={<MyAccount/>}/>

    <Route path='/logout' element={<Logout/>}/>

    <Route path='/cart' element={<Cart/>}/>

    <Route path='*' element={<PageNotFound/>}/>





   </Routes>
   <Footer/>
   </BrowserRouter>
   
   

    </>
   
  )
}

export default App