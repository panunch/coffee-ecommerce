import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import AppNavBar from './components/AppNavBar';
import Footer from './components/Footer';
import Products from './pages/Products';
import ProductsView from './pages/ProductsView';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Error from './pages/Error';
import Admin from './pages/Admin';
import CreateProduct from './pages/CreateProduct';
import UpdateProduct from './pages/UpdateProduct';
import './App.css';
import { UserProvider } from './UserContext';

function App() {

  const [user, setUser] = useState({
    // email: localStorage.getItem('email')
    id: null,
    isAdmin: null
});

  const unsetUser = () => {
    localStorage.clear();
  }

  useEffect(()=>{
    // console.log(user)
    // console.log(localStorage)
   
    fetch(`${process.env.REACT_APP_API_URL}/users/details`,{
      method:'GET',
      headers:{
        Authorization:`Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(res=>res.json())
    .then(data=>{
      if(typeof data._id!=='undefined'){
        // console.log(data._id)
        setUser({
          id:data._id,
          isAdmin:data.isAdmin
        })
      } else {
        setUser({
          id:null,
          isAdmin:null
        })
      }
    })
  },[])


  return (
    
    <UserProvider value={{user, setUser, unsetUser}} >
        <Router>
            <AppNavBar />
            <Container>
                <Routes>
                    <Route path="/" element = {<Home/>} />
                    <Route path="/products" element = {<Products/>} />
                    <Route path="/products/:productId" element = {<ProductsView/>} />
                    <Route path="/register"element = {<Register/>}/>
                    <Route path="/login" element = {<Login/>}/>
                    <Route path="/logout" element = {<Logout/>}/>
                    <Route path="/admin" element = {<Admin/>}/>
                    <Route path="/createproduct" element = {<CreateProduct/>}/>
                    <Route path="/updateproduct/:productId" element = {<UpdateProduct/>}/>
                    <Route path="/*" element = {<Error/>}/>
                </Routes>
            </Container>
            <Footer /> 
        </Router>
    </UserProvider>

  );
}

export default App;
